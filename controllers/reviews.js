const Game = require('../models/game');

module.exports = {
    create
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        req.body.createdBy = req.user._id;
        game.reviews.push(req.body);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}
