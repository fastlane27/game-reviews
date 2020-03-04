const Game = require('../models/game');

module.exports = {
    index,
    show,
    addFav,
    removeFav
};

function index(req, res) {
    Game.find({}, function(err, games) {
        res.render('games/index', { games });
    });
}

function show(req, res) {
    Game.findById(req.params.id, function(err, game) {
        res.render('games/show', { game });
    });
}

function addFav(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (game.favoritedBy.includes(req.user._id)) return res.redirect(`/games/${game._id}`);
        game.favoritedBy.push(req.user._id);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}

function removeFav(req, res) {
    Game.findById(req.params.id, function(err, game) {
        game.favoritedBy.pull(req.user._id);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}
