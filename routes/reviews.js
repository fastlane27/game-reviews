const router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', reviewsCtrl.create);

module.exports = router;
