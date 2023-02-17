const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionName = 'jobs'
const UserSchema = new Schema({
    job: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    comapanyName: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
});
const User2 = mongoose.model(collectionName, UserSchema)
module.exports = User2;