const router = require('express').Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/:id', gamesCtrl.show);

module.exports = router;
