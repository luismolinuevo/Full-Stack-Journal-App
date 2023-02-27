const mongoose = require("mongoose");

const entry = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 13
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
    moodExplained: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
})

module.exports = mongoose.model("Entry", entry)