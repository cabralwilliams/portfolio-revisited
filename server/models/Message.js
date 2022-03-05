const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt'); //Needed if this is the User model

const messageSchema = new Schema({
    //Schema properties go here
    message_text: {
        type: String,
        required: true,
        trim: true
    },
    sender_email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    sender_name: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    has_been_read: {
        type: Boolean,
        default: false
    }
}
);

// const Message = model('Message', messageSchema);

module.exports = messageSchema;