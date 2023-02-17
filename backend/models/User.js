const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionName = 'users'
const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    Force: {
        type: String,
        required: false,
    },
    Age: {
        type: Number,
        required: false,
    },
    Home_Town: {
        type: String,
        required: false,
    },
});
const User = mongoose.model(collectionName, UserSchema)
module.exports = User;


