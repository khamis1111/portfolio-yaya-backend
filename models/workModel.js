const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
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
    workVideo: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    imgCover: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    topVideo: {
        type: Boolean,
        default: false
    },
    details: {
        Shot: String,
        Edited: String,
        Sound: String,
        Motion: String,
        Script: String,
        Producer: String,
        Produced: String,
    }
}, { timestamps: true })


const url = (doc) => {
    if (doc.workVideo) {
        if (doc.workVideo && !doc.workVideo.startsWith(process.env.BASE_URL)) {
            doc.workVideo = `${process.env.BASE_URL}/workVideo/${doc.workVideo}`;
        }
    }

    if (doc.imgCover) {
        if (doc.imgCover && !doc.imgCover.startsWith(process.env.BASE_URL)) {
            doc.imgCover = `${process.env.BASE_URL}/imgCover/${doc.imgCover}`;
        }
    }
}

workSchema.post('save', (doc) => {
    url(doc)
})
workSchema.post('init', (doc) => {
    url(doc)
})

const workModel = mongoose.model('Work', workSchema)

module.exports = workModel