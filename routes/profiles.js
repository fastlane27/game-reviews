const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/', profilesCtrl.index);
router.put('/', profilesCtrl.create);

module.exports = router;
