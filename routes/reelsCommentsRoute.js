const router = require('express').Router({ mergeParams: true })
const { protectAuth, allowedTo } = require('../controllers/authController')
const { getAllReelsComments, addReelsComments, getOneReelsComments, updateReelsComments, deleteReelsComments, filterObj, deleteAllReelsComments, getAllCommentsForReel, addOneCommentsForReel } = require('../controllers/reelsCommentsController')

router.route('/')
    .get(getAllCommentsForReel, getAllReelsComments)
    .post(addOneCommentsForReel, filterObj, addReelsComments)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteAllReelsComments)
router.route('/:id')
    .get(getOneReelsComments)
    .put(protectAuth(), allowedTo('admin', 'manager'), filterObj, updateReelsComments)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteReelsComments)

module.exports = router
