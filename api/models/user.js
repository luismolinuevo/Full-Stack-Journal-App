const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("User", users)