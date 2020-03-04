const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/', profilesCtrl.index);

module.exports = router;
