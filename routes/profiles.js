const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/profiles/:id', profilesCtrl.index);
router.post('/games/:id/favorite', profilesCtrl.addFav);
router.delete('/games/:id/favorite', profilesCtrl.removeFav);

module.exports = router;
