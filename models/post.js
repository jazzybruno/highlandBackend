const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true,
        maxlength: 1000
    },

    photo: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports.Post = Post;