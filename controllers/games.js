const Game = require('../models/game');

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
    Game.findById(req.params.id).populate('reviews.createdBy').exec(function(err, game) {
        res.render('games/show', { game });
    });
}
