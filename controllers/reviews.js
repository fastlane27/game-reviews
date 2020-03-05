const Game = require('../models/game');

module.exports = {
    create,
    delete: deleteReview,
    update
};

function create(req, res) {
    Game.findById(req.params.id, function(err, game) {
        req.body.createdBy = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        req.body.userProfile = req.user.profileId;
        game.reviews.push(req.body);
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}

function deleteReview(req, res) {
    Game.findOne({ 'reviews._id': req.params.id }, function(err, game) {
        const review = game.reviews.id(req.params.id);
        if (!review.createdBy.equals(req.user && req.user._id)) return res.redirect(`/games/${game._id}`);
        review.remove();
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        });
    });
}

function update(req, res) {
    Game.findOne({ 'reviews._id': req.params.id }, function(err, game) {
        const review = game.reviews.id(req.params.id);
        if (!review.createdBy.equals(req.user && req.user._id)) return res.redirect(`/games/${game._id}`);
        review.content = req.body.content;
        review.rating = req.body.rating;
        game.save(function(err) {
            res.redirect(`/games/${game._id}`);
        })
    });
}
