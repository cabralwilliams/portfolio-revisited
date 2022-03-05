const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt'); //Needed if this is the User model
const messageSchema = require('./Message');

const userSchema = new Schema({
    //Schema properties go here
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    inbox: [messageSchema],
    outbox: [messageSchema],
    isAdmin: {
        type: Boolean,
        default: false
    }
}
);

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;