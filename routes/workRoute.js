const router = require('express').Router()
const { getAllWork, addWork, getOneWork, updateWork, deleteWork, filterObj, deleteAllWork, uploadFiles } = require('../controllers/workController')
const { addWorkValidation, getOneWorkValidation, updateWorkValidation, deleteWorkValidation } = require('../utils/validation/workValidation')


router.route('/')
    .get(getAllWork)
    .post(uploadFiles, filterObj, addWorkValidation, addWork)
    .delete(deleteAllWork)
router.route('/:id')
    .get(getOneWorkValidation, getOneWork)
    .put(uploadFiles, filterObj, updateWorkValidation, updateWork)
    .delete(deleteWorkValidation, deleteWork)

module.exports = router