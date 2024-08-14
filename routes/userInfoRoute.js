const router = require('express').Router()
const cors = require('cors')
const { getAllUserInfo, addUserInfo, getOneUserInfo, updateUserInfo, deleteUserInfo, filterObj, deleteAllUserInfo, uploadMainVideo } = require('../controllers/userInfoController')
const { addUserInfoValidation, getOneUserInfoValidation, updateUserInfoValidation, deleteUserInfoValidation } = require('../utils/validation/userInfoValidation')

router.route('/')
    .get(getAllUserInfo)
    .post(filterObj, addUserInfoValidation, addUserInfo)
    .delete(deleteAllUserInfo)
router.route('/:id')
    .get(getOneUserInfoValidation, getOneUserInfo)
    .put(filterObj, updateUserInfoValidation, updateUserInfo)
    .delete(deleteUserInfoValidation, deleteUserInfo)

module.exports = router