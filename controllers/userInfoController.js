const slugify = require("slugify");
const userInfoModel = require("../models/userInfoModel");
const handlersFactory = require("./factory/handlersFactory");
const uploadFiles = require("../utils/uploadFiles");

module.exports = {
    // @desc   Add mainVideo User
    uploadMainVideo: uploadFiles.multiImg(
        [
            { name: 'imgProfile', maxCount: 1 },
            { name: 'mainVideo', maxCount: 1 }
        ],
        'imgProfile',
        'mainVideo',
    ),
    // @desc   Add User Info
    // @Route  POST /api/v1/userInfo
    // @Access Private
    addUserInfo: handlersFactory.addOne(userInfoModel),
    // @desc   Get All User Info
    // @Route  GET /api/v1/userInfo
    // @Access Private
    getAllUserInfo: handlersFactory.getAll(userInfoModel),
    // @desc   Get One User Info
    // @Route  GET /api/v1/userInfo/:id
    // @Access Private
    getOneUserInfo: handlersFactory.getOne(userInfoModel),
    // @desc   Update User Info
    // @Route  PUT /api/v1/userInfo/:id
    // @Access Private
    updateUserInfo: handlersFactory.updateOne(userInfoModel),
    // @desc   Delete One User Info
    // @Route  DELETE /api/v1/userInfo/:id
    // @Access Private
    deleteUserInfo: handlersFactory.deleteOne(userInfoModel),
    // @desc   Delete All User Info
    // @Route  DELETE /api/v1/userInfo
    // @Access Private
    deleteAllUserInfo: handlersFactory.deleteAll(userInfoModel),
    // @desc   Set Slugify
    // @Route  POST /api/v1/userInfo, PUT /api/v1/userInfo/:id
    // @Access Private
    filterObj: (req, res, next) => {
        if (req.body.name) req.body.slug = slugify(req.body.name)
        next()
    },
}