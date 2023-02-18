const mongoose = require('mongoose');
const { Schema } = mongoose;

const collectionName = 'jobs'
const JobsSchema= new Schema({
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
const Jobs = mongoose.model(collectionName, JobsSchema)
module.exports = Jobs;