const router = require('express').Router()
const { getAllContact, addContact, getOneContact, updateContact, deleteContact, filterObj, deleteAllContact } = require('../controllers/contactController')
const { addContactValidation, getOneContactValidation, updateContactValidation, deleteContactValidation } = require('../utils/validation/contactValidation')


router.route('/')
    .get(getAllContact)
    .post(filterObj, addContactValidation, addContact)
    .delete(deleteAllContact)
router.route('/:id')
    .get(getOneContactValidation, getOneContact)
    .put(filterObj, updateContactValidation, updateContact)
    .delete(deleteContactValidation, deleteContact)

module.exports = router