const router = require('express').Router()
const { updateDiary, deleteDiary, addDiary } = require('../controllers/diaryController')

router.route('/:id')
    .post(addDiary)
    .put(updateDiary)
    .delete(deleteDiary)

module.exports = router