const { Schema, model } = require ('mongoose');



const postSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true
    },
    datePosted: {
        type: Date,
        required: true,
        get: (timestamp) => dateFormat(timestamp)
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
});

const Post = model('Post', postSchema);

module.exports = Post;

