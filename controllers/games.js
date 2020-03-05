const Game = require('../models/game');
const Profile = require('../models/profile');

module.exports = {
    index,
    show
};

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', { games });
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (req.user) {
            Profile.findById(req.user.profileId, function(err, profile) {
                res.render('games/show', { game, profile });
            });
        } else {
            res.render('games/show', { game });
        }
    });
}
