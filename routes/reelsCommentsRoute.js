const router = require('express').Router({ mergeParams: true })
const { getAllReelsComments, addReelsComments, getOneReelsComments, updateReelsComments, deleteReelsComments, filterObj, deleteAllReelsComments, getAllCommentsForReel, addOneCommentsForReel } = require('../controllers/reelsCommentsController')

router.route('/')
    .get(getAllCommentsForReel, getAllReelsComments)
    .post(addOneCommentsForReel, filterObj, addReelsComments)
    .delete(deleteAllReelsComments)
router.route('/:id')
    .get(getOneReelsComments)
    .put(filterObj, updateReelsComments)
    .delete(deleteReelsComments)

module.exports = router
