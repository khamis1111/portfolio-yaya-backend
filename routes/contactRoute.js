const router = require('express').Router()
const { protectAuth, allowedTo } = require('../controllers/authController')
const { getAllContact, addContact, getOneContact, updateContact, deleteContact, filterObj, deleteAllContact } = require('../controllers/contactController')
const { addContactValidation, getOneContactValidation, updateContactValidation, deleteContactValidation } = require('../utils/validation/contactValidation')


router.route('/')
    .get(getAllContact)
    .post(filterObj, addContactValidation, addContact)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteAllContact)
router.route('/:id')
    .get(getOneContactValidation, getOneContact)
    .put(protectAuth(), allowedTo('admin', 'manager'), filterObj, updateContactValidation, updateContact)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteContactValidation, deleteContact)

module.exports = router