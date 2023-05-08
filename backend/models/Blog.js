const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionName = 'blogs'
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});
const Blog = mongoose.model(collectionName, BlogSchema)
module.exports = Blog;


