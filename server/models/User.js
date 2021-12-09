const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
    },
    bio: {
        type: String,
        required: 'Please provide a bio.',
        minlength: 1,
        maxlength: 240,
        trim: true,
    },
    workplaces: [
        {
            type: String,
            trim: true,
        },
    ],
    rate: {
        type: Number,
        required: true,
        min: 0,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Job',
        }
    ]
});

const User = model('User', userSchema);

module.exports = User;

