const slugify = require("slugify");
const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");
const handlersFactory = require("./factory/handlersFactory");
const { sendEmail } = require("../utils/sendEmail");
const ApiError = require("../utils/apiError");

module.exports = {
    // @desc   Add Contact
    // @Route  POST /api/v1/contact
    // @Access Private
    addContact: expressAsyncHandler(async (req, res, next) => {
        const document = await contactModel.create(req.body)

        // Send Contact To Email
        const message =
            `
            ${document.name}, \n
            ${document.message}
            This Email From => ${document.email}
        `
        sendEmail({
            email: document.email,
            subject: document.name,
            message,
        }).then(_ => {
            res.status(201).json({ status: 'Success', data: document })
        }).catch(async (err) => {
            next(new ApiError(`There a problem, Please Try Agian ${err}`, 500))
        })
    }),
    // @desc   Get All Contact
    // @Route  GET /api/v1/contact
    // @Access Private
    getAllContact: handlersFactory.getAll(contactModel),
    // @desc   Get One Contact
    // @Route  GET /api/v1/contact/:id
    // @Access Private
    getOneContact: handlersFactory.getOne(contactModel),
    // @desc   Update Contact
    // @Route  PUT /api/v1/contact/:id
    // @Access Private
    updateContact: handlersFactory.updateOne(contactModel),
    // @desc   Delete One Contact
    // @Route  DELETE /api/v1/contact/:id
    // @Access Private
    deleteContact: handlersFactory.deleteOne(contactModel),
    // @desc   Delete All Contact
    // @Route  DELETE /api/v1/contact
    // @Access Private
    deleteAllContact: handlersFactory.deleteAll(contactModel),
    // @desc   Set Slugify
    // @Route  POST /api/v1/contact, PUT /api/v1/contact/:id
    // @Access Private
    filterObj: (req, res, next) => {
        if (req.body.name) req.body.slug = slugify(req.body.name)
        next()
    },
}