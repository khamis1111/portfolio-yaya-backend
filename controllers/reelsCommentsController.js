const slugify = require("slugify");
const handlersFactory = require("./factory/handlersFactory");
const reelsCommentsModel = require("../models/reelsCommentsModel");

module.exports = {
    // @desc   Get All Comments For Reel
    // @Route  GET /api/v1/reels/reelsId/comments
    // @Access Public
    getAllCommentsForReel: (req, res, next) => {
        let filterOfQuery = {}
        if (req.params.reelsId) filterOfQuery = { reels: req.params.reelsId }
        req.filterOfQuery = filterOfQuery
        next()
    },
    // @desc   Add One Comments For Reel
    // @Route  POST /api/v1/reels/reelsId/comments
    // @Access Public
    addOneCommentsForReel: (req, res, next) => {
        if (!req.body.reels) req.body.reels = req.params.reelsId
        next()
    },
    // @desc   Add ReelsComments
    // @Route  POST /api/v1/reelsComments
    // @Access Private
    addReelsComments: handlersFactory.addOne(reelsCommentsModel),
    // @desc   Get All ReelsComments
    // @Route  GET /api/v1/reelsComments
    // @Access Public
    getAllReelsComments: handlersFactory.getAll(reelsCommentsModel),
    // @desc   Get One ReelsComments
    // @Route  GET /api/v1/reelsComments/:id
    // @Access Public
    getOneReelsComments: handlersFactory.getOne(reelsCommentsModel),
    // @desc   Update ReelsComments
    // @Route  PUT /api/v1/reelsComments/:id
    // @Access Private
    updateReelsComments: handlersFactory.updateOne(reelsCommentsModel),
    // @desc   Delete One ReelsComments
    // @Route  DELETE /api/v1/reelsComments/:id
    // @Access Private
    deleteReelsComments: handlersFactory.deleteOne(reelsCommentsModel),
    // @desc   Delete All ReelsComments
    // @Route  DELETE /api/v1/reelsComments
    // @Access Private
    deleteAllReelsComments: handlersFactory.deleteAll(reelsCommentsModel),
    // @desc   Set Slugify
    // @Route  POST /api/v1/reelsComments, PUT /api/v1/reelsComments/:id
    // @Access Private
    filterObj: (req, res, next) => {
        if (req.body.name) req.body.slug = slugify(req.body.name)
        next()
    },
}