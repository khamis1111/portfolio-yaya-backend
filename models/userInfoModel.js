const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
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
    nameProfile: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    career: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    mainVideo: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    imgProfile: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    socailMedia: {
        linkFacebook: String,
        linkInstargram: String,
        linkBehance: String,
        linkYoutube: String,
    },
    diary: [{
        name: String,
        link: String
    }]
 
}, { timestamps: true })


// const url = (doc) => {
//     if (doc.mainVideo) {
//         if (doc.mainVideo && !doc.mainVideo.startsWith(process.env.BASE_URL)) {
//             doc.mainVideo = `${process.env.BASE_URL}/mainVideo/${doc.mainVideo}`;
//         }
//     }

//     if (doc.imgProfile) {
//         if (doc.imgProfile && !doc.imgProfile.startsWith(process.env.BASE_URL)) {
//             doc.imgProfile = `${process.env.BASE_URL}/imgProfile/${doc.imgProfile}`;
//         }
//     }
// }

// userInfoSchema.post('save', (doc) => {
//     url(doc)
// })
// userInfoSchema.post('init', (doc) => {
//     url(doc)
// })

const userInfoModel = mongoose.model('UserInfo', userInfoSchema)

module.exports = userInfoModel