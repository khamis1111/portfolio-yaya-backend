const router = require('express').Router()
const { getAllReels, addReels, getOneReels, updateReels, deleteReels, filterObj, deleteAllReels, uploadReelsVideo, addAndRemoveLikeReels, getAllLikes, getMyIp } = require('../controllers/reelsController')
const { addReelsValidation, getOneReelsValidation, updateReelsValidation, deleteReelsValidation, addLikeReelsValidation } = require('../utils/validation/reelsValidation')
const reelsCommentsRoute = require('./reelsCommentsRoute')

router.use('/:reelsId/comments', reelsCommentsRoute)

router.route('/allLikes').get(getAllLikes)

router.route('/')
    .get(getAllReels)
    .post(uploadReelsVideo, filterObj, addReelsValidation, addReels)
    .delete(deleteAllReels)
router.route('/:id')
    .get(getOneReelsValidation, getOneReels)
    .put(uploadReelsVideo, filterObj, updateReelsValidation, updateReels)
    .delete(deleteReelsValidation, deleteReels)

router.route('/like/:id')
    .post(getMyIp, addLikeReelsValidation, addAndRemoveLikeReels)


module.exports = router