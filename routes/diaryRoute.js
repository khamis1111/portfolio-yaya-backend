const router = require('express').Router()
const { protectAuth, allowedTo } = require('../controllers/authController')
const { updateDiary, deleteDiary, addDiary } = require('../controllers/diaryController')

router.route('/:id')
    .post(protectAuth(), allowedTo('admin', 'manager'), addDiary)
    .put(protectAuth(), allowedTo('admin', 'manager'), updateDiary)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteDiary)

module.exports = router