const { Schema, model } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');



const postSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    datePosted: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const Post = model('Post', postSchema);

module.exports = Post;

