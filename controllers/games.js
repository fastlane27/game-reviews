const Game = require('../models/game');

module.exports = {
    index,
    show
};

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', { user: req.user, games });
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
        res.render('games/show', { user: req.user, game });
    });
}
