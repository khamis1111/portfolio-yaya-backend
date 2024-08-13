const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    slug: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
}, { timestamps: true })

const contactModel = mongoose.model('Contact', contactSchema)

module.exports = contactModel