const { check } = require("express-validator")
const validationMiddleware = require("../../middleware/validationMiddleware")

exports.addContactValidation = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3 })
        .withMessage('Name is too short'),
    check('email')
        .isEmail()
        .withMessage('Email is Invalid')
        .notEmpty()
        .withMessage('Email is required')
        .isLength({ min: 3 })
        .withMessage('Email is too short'),
    check('message')
        .notEmpty()
        .withMessage('Message is required')
        .isLength({ min: 3 })
        .withMessage('Message is too short'),
    validationMiddleware
]

exports.getOneContactValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.updateContactValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]

exports.deleteContactValidation = [
    check('id')
        .isMongoId()
        .withMessage('Invalid User Id'),
    validationMiddleware
]
