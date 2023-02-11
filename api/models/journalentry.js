const mongoose = require("mongoose");

const entry = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    entry: {
        type: String,
        required: true,
    }, 
    date: {
        type: String,
        required: true,
    },
    mood: {
        type: [String],
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
})

module.exports = mongoose.model("Entry", entry)