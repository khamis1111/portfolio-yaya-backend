const mongoose = require("mongoose");

const reelsCommentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 5,
        default: 'Anonymous'
    },
    slug: {
        type: String,
        lowercase: true
    },
    comment: {
        type: String,
        trim: true,
        minLength: 5,
        required: true
    },
    reels: {
        type: mongoose.Schema.ObjectId,
        ref: 'Reels',
        required: true
    },
}, { timestamps: true })


const reelsCommentsModel = mongoose.model('ReelsComments', reelsCommentSchema)

module.exports = reelsCommentsModel