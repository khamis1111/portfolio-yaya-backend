const router = require('express').Router()
const { protectAuth, allowedTo } = require('../controllers/authController')
const { getAllWork, addWork, getOneWork, updateWork, deleteWork, filterObj, deleteAllWork, } = require('../controllers/workController')
const { addWorkValidation, getOneWorkValidation, updateWorkValidation, deleteWorkValidation } = require('../utils/validation/workValidation')


router.route('/')
    .get(getAllWork)
    .post(protectAuth(), allowedTo('admin', 'manager'),filterObj, addWorkValidation, addWork)
    .delete(protectAuth(), allowedTo('admin', 'manager'),deleteAllWork)
router.route('/:id')
    .get(getOneWorkValidation, getOneWork)
    .put(protectAuth(), allowedTo('admin', 'manager'),filterObj, updateWorkValidation, updateWork)
    .delete(protectAuth(), allowedTo('admin', 'manager'),deleteWorkValidation, deleteWork)

module.exports = router