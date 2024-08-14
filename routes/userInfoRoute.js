const router = require('express').Router()
const { protectAuth, allowedTo } = require('../controllers/authController')
const { getAllUserInfo, addUserInfo, getOneUserInfo, updateUserInfo, deleteUserInfo, filterObj, deleteAllUserInfo } = require('../controllers/userInfoController')
const { addUserInfoValidation, getOneUserInfoValidation, updateUserInfoValidation, deleteUserInfoValidation } = require('../utils/validation/userInfoValidation')

router.route('/')
    .get(getAllUserInfo)
    .post(protectAuth(), allowedTo('admin', 'manager'), filterObj, addUserInfoValidation, addUserInfo)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteAllUserInfo)
router.route('/:id')
    .get(getOneUserInfoValidation, getOneUserInfo)
    .put(protectAuth(), allowedTo('admin', 'manager'), filterObj, updateUserInfoValidation, updateUserInfo)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteUserInfoValidation, deleteUserInfo)

module.exports = router