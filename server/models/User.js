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
        require: 'Please provide a bio.',
        minlength: 1,
        maxlength: 240,
        trim: true,
    },
    employer: {
        type: Boolean,
        require: 'Are you an employer? Please specify.',
    },
    workplaces: [
        {
            type: String,
            trim: true,
        },
    ],
    rate: {
        type: Number,
        require: true,
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

