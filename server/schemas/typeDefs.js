const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        first_name: String
        last_name: String
        username: String
        password: String
        email: String
        inbox: [Message]
        outbox: [Message]
        isAdmin: Boolean
    }

    type Message {
        _id: ID
        message_text: String
        sender_name: String
        sender_email: String
        created_at: String
        has_been_read: Boolean
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        sendMessage(sender_name: String!, sender_email: String!, message_text: String!): User
        createUser(username: String!, first_name: String!, last_name: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        deleteMessage(_id: ID!): User
        toggleHasViewed(_id: ID!): User
    }
`;

module.exports = typeDefs;