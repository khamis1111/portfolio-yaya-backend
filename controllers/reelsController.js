const slugify = require("slugify");
const expressAsyncHandler = require("express-async-handler");
const os = require("os");
const { default: axios } = require("axios");
const handlersFactory = require("./factory/handlersFactory");
const uploadFiles = require("../utils/uploadFiles");
const ApiError = require("../utils/apiError");
const { reelsModel, likesModel } = require("../models/reelsModel");

module.exports = {
    // @desc   Add reelsVideo User
    uploadReelsVideo: uploadFiles.multiImg(
        [
            // { name: 'imgProfile', maxCount: 1 },
            { name: 'reelsVideo', maxCount: 1 }
        ],
        '',
        'reelsVideo',
    ),
    // @desc   Add Reels
    // @Route  POST /api/v1/reels
    // @Access Private
    addReels: handlersFactory.addOne(reelsModel),
    // @desc   Get All Reels
    // @Route  GET /api/v1/reels
    // @Access Private
    getAllReels: handlersFactory.getAll(reelsModel),
    // @desc   Get One Reels
    // @Route  GET /api/v1/reels/:id
    // @Access Private
    getOneReels: handlersFactory.getOne(reelsModel),
    // @desc   Update Reels
    // @Route  PUT /api/v1/reels/:id
    // @Access Private
    updateReels: handlersFactory.updateOne(reelsModel),
    // @desc   Delete One Reels
    // @Route  DELETE /api/v1/reels/:id
    // @Access Private
    deleteReels: handlersFactory.deleteOne(reelsModel),
    // @desc   Delete All Reels
    // @Route  DELETE /api/v1/reels
    // @Access Private
    deleteAllReels: handlersFactory.deleteAll(reelsModel),

    addAndRemoveLikeReels: expressAsyncHandler(async (req, res, next) => {
        const { id } = req.params
        const identifier = req.myIp;

        const document = await reelsModel.findById(id)
        if (!document) {
            return next(new ApiError(`There is no document for this id ${id}`, 400))
        }

        // Check if the user has already liked the video
        const existingLike = await likesModel.findOne({ videoId: id, identifier });

        if (existingLike) {
            await likesModel.findOneAndDelete({ videoId: id, identifier })
            await reelsModel.findByIdAndUpdate(id, { $inc: { likes: -1 } }, { new: true })
            res.status(200).json({ status: 'Success', msg: `like Remove Successfully` })
        } else {
            await likesModel.create({ identifier, videoId: id })
            await reelsModel.findByIdAndUpdate(id, { $inc: { likes: +1 } }, { new: true })
            res.status(200).json({ status: 'Success', msg: `like Added Successfully` })
        }
    }),
    getAllLikes: handlersFactory.getAll(likesModel),

    // @desc   Set Slugify
    // @Route  POST /api/v1/reels, PUT /api/v1/reels/:id
    // @Access Private
    filterObj: (req, res, next) => {
        if (req.body.name) req.body.slug = slugify(req.body.name)
        next()
    },
    getMyIp: expressAsyncHandler(async (req, res, next) => {
        const response = await axios.get('https://api.ipify.org?format=json');
        req.myIp = response.data.ip
        next()
    })
}