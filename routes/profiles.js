const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/profiles', profilesCtrl.index);
router.get('/profiles/:id', profilesCtrl.show);
router.post('/games/:id/favorite', isLoggedIn, profilesCtrl.addFav);
router.delete('/games/:id/favorite', isLoggedIn, profilesCtrl.removeFav);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
