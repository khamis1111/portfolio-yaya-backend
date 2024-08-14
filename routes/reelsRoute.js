const router = require('express').Router()
const { protectAuth, allowedTo } = require('../controllers/authController')
const { getAllReels, addReels, getOneReels, updateReels, deleteReels, filterObj, deleteAllReels, uploadReelsVideo, addAndRemoveLikeReels, getAllLikes, getMyIp } = require('../controllers/reelsController')
const { addReelsValidation, getOneReelsValidation, updateReelsValidation, deleteReelsValidation, addLikeReelsValidation } = require('../utils/validation/reelsValidation')
const reelsCommentsRoute = require('./reelsCommentsRoute')

router.use('/:reelsId/comments', reelsCommentsRoute)

router.route('/allLikes').get(getAllLikes)

router.route('/')
    .get(getAllReels)
    .post(protectAuth(), allowedTo('admin', 'manager'), uploadReelsVideo, filterObj, addReelsValidation, addReels)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteAllReels)
router.route('/:id')
    .get(getOneReelsValidation, getOneReels)
    .put(protectAuth(), allowedTo('admin', 'manager'), uploadReelsVideo, filterObj, updateReelsValidation, updateReels)
    .delete(protectAuth(), allowedTo('admin', 'manager'), deleteReelsValidation, deleteReels)

router.route('/like/:id')
    .post(getMyIp, addLikeReelsValidation, addAndRemoveLikeReels)


module.exports = router