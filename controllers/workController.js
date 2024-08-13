const slugify = require("slugify");
const WorkModel = require("../models/workModel");
const handlersFactory = require("./factory/handlersFactory");
const uploadFiles = require("../utils/uploadFiles");

module.exports = {
    // @desc   Add mainVideo Work
    uploadFiles: uploadFiles.multiImg([
        { name: 'imgCover', maxCount: 1 },
        { name: 'workVideo', maxCount: 1 }
    ],
        'imgCover',
        'workVideo',
    ),
    // @desc   Add Work
    // @Route  POST /api/v1/work
    // @Access Private
    addWork: handlersFactory.addOne(WorkModel),
    // @desc   Get All Work
    // @Route  GET /api/v1/work
    // @Access Private
    getAllWork: handlersFactory.getAll(WorkModel),
    // @desc   Get One Work
    // @Route  GET /api/v1/work/:id
    // @Access Private
    getOneWork: handlersFactory.getOne(WorkModel),
    // @desc   Update Work
    // @Route  PUT /api/v1/work/:id
    // @Access Private
    updateWork: handlersFactory.updateOne(WorkModel),
    // @desc   Delete One Work
    // @Route  DELETE /api/v1/work/:id
    // @Access Private
    deleteWork: handlersFactory.deleteOne(WorkModel),
    // @desc   Delete All Work
    // @Route  DELETE /api/v1/work
    // @Access Private
    deleteAllWork: handlersFactory.deleteAll(WorkModel),
    // @desc   Set Slugify
    // @Route  POST /api/v1/work, PUT /api/v1/work/:id
    // @Access Private
    filterObj: (req, res, next) => {
        if (req.body.name) req.body.slug = slugify(req.body.name)
        next()
    },
}