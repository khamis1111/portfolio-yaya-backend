const { check } = require("express-validator")
const validationMiddleware = require("../../middleware/validationMiddleware")
const reelsModel = require("../../models/reelsModel")

exports.addReelsValidation = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name is too short'),
    check('reelsVideo')
        .notEmpty()
        .withMessage('Reels Video is required')
        .isLength({ min: 3 })
        .withMessage('Reels Video is too short'),
    validationMiddleware
]

exports.addLikeReelsValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.removeLikeReelsValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id')
        .custom(async (val, { req }) => {
            const document = await reelsModel.findById(req.params.id)

            if (!document) {
                throw new Error(`There is no document for this id ${req.params.id}`)
            }

            if (document.likes <= 0) {
                throw new Error(`Likes is already 0 can't remove`)
            }
            return true
        }),
    validationMiddleware
]

exports.getOneReelsValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.updateReelsValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.deleteReelsValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]
