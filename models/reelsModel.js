const mongoose = require("mongoose");

const reelsSchema = new mongoose.Schema({
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
    reelsVideo: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const likesSchema = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Reels'
    },
    identifier: String, // Can be IP address or any other unique identifier
});

// const url = (doc) => {
//     if (doc.reelsVideo) {
//         if (doc.reelsVideo && !doc.reelsVideo.startsWith(process.env.BASE_URL)) {
//             doc.reelsVideo = `${process.env.BASE_URL}/reelsVideo/${doc.reelsVideo}`;
//         }
//     }
// }

// reelsSchema.post('save', (doc) => {
//     url(doc)
// })
// reelsSchema.post('init', (doc) => {
//     url(doc)
// })

const reelsModel = mongoose.model('Reels', reelsSchema)
const likesModel = mongoose.model('Likes', likesSchema)

module.exports = { reelsModel, likesModel }