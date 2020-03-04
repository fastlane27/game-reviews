const router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/games/:gameId/reviews/:reviewId', isLoggedIn, reviewsCtrl.delete);
router.put('/games/:gameId/reviews/:reviewId', isLoggedIn, reviewsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
