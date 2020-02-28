const router = require('express').Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);

module.exports = router;
