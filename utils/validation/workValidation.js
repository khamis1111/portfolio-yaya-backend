const { check } = require("express-validator")
const validationMiddleware = require("../../middleware/validationMiddleware")

exports.addWorkValidation = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name is too short'),
    check('workVideo')
        .notEmpty()
        .withMessage('Work Video is required')
        .isLength({ min: 3 })
        .withMessage('Work Video is too short'),
    check('imgCover')
        .notEmpty()
        .withMessage('Img Cover is required')
        .isLength({ min: 3 })
        .withMessage('Img Cover is too short'),
    validationMiddleware
]

exports.getOneWorkValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.updateWorkValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.deleteWorkValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]
