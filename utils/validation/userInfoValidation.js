const { check } = require("express-validator")
const validationMiddleware = require("../../middleware/validationMiddleware")

exports.addUserInfoValidation = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name is too short'),
    check('nameProfile')
        .notEmpty()
        .withMessage('Name Profile is required')
        .isLength({ min: 3 })
        .withMessage('Name Profile is too short'),
    check('career')
        .notEmpty()
        .withMessage('Career is required')
        .isLength({ min: 3 })
        .withMessage('Career is too short'),
    check('email')
        .isEmail()
        .withMessage('Email is in correct')
        .notEmpty()
        .withMessage('Email is required')
        .isLength({ min: 3 })
        .withMessage('Email is too short'),
    check('mainVideo')
        .notEmpty()
        .withMessage('Main Video is required')
        .isLength({ min: 3 })
        .withMessage('Main Video is too short'),
    validationMiddleware
]

exports.getOneUserInfoValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.updateUserInfoValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.deleteUserInfoValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]
