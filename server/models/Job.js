const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const jobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: 'Please provide a description.',
        trim: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
    },
    datePosted: {
        type: Date,
        default: Date.now,
        //get: (timestamp) => dateFormat(timestamp),
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    }
});

const Job = model('Job', jobSchema);

module.exports = Job;