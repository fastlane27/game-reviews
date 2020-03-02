const router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', reviewsCtrl.create);
router.delete('/games/:gameId/reviews/:reviewId', reviewsCtrl.delete);
router.put('/games/:gameId/reviews/:reviewId', reviewsCtrl.update);

module.exports = router;
