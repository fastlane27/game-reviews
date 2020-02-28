const router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
  res.redirect('/games');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/games',
    failureRedirect: '/games'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/games');
});

module.exports = router;
