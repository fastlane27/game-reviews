const router = require('express').Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/:id', gamesCtrl.show);
router.post('/:id', isLoggedIn, gamesCtrl.addFav);
router.delete('/:id', isLoggedIn, gamesCtrl.removeFav);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
