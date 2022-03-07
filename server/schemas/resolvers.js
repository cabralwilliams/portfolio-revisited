require('dotenv').config();
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const sendEmail = require('../utils/sendEmail');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // console.log(context.user);
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select("-__v -password")
                return userData;
            }
            throw new AuthenticationError("Please log in.");
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            // console.log(args);
            const newUser = await User.create(args);
            const token = signToken(newUser);
            return { user: newUser, token };
        },
        login: async (parent, args) => {
            let loggedUser = await User.findOne({
                username: args.username
            });

            if(!loggedUser) {
                loggedUser = await User.findOne({ email: args.username });

                if(!loggedUser) {
                    //Throw error if neither username nor email is matched by input value
                    throw new AuthenticationError("Improper credentials provided.");
                }
            }

            const correctPW = await loggedUser.isCorrectPassword(args.password);

            // console.log(correctPW);
            if(!correctPW) {
                throw new AuthenticationError("Improper credentials provided.");
            }

            const token = signToken(loggedUser);
            // console.log(`This is line 48: ${JSON.stringify({ user: loggedUser, token })}`);
            return { user: loggedUser, token };
        },
        toggleHasViewed: async (parent, { _id }, context) => {
            if(context.user) {
                const updatedUser = await User.findOne({ _id: context.user._id });
                const messages = updatedUser.inbox;
                // console.log(messages);
                return updatedUser;
            }
            throw new AuthenticationError("Could not complete your request.");
        },
        sendMessage: async (parent, args) => {
            const updatedUser = await User.findOneAndUpdate(
                { username: process.env.CONTACT_USER_NAME },
                { $push: { inbox: { ...args } } }
            );
            // console.log(updatedUser);
            return updatedUser;
        }
    }
}

module.exports = resolvers;