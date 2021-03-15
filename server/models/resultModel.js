const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

var userResult = mongoose.model('Result', resultSchema);

module.exports = userResult;