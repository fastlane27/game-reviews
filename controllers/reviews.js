const Game = require('../models/game');

module.exports = {
    create,
    delete: deleteReview,
    update
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

function deleteReview(req, res) {
    Game.findByIdAndUpdate(req.params.gameId,
        { $pull: { reviews: { _id: req.params.reviewId }}},
        function(err, game) {
            res.redirect(`/games/${game._id}`);
        }
    );
}

function update(req, res) {

}
