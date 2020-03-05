const Profile = require('../models/profile');

module.exports = {
    index,
    addFav,
    removeFav
};

function index(req, res) {
    Profile.findById(req.params.id).populate('favorites').exec(function(err, profile) {
        res.render('profiles/index', { profile });
    });
}

function addFav(req, res) {
    Profile.findById(req.user.profileId, function(err, profile) {
        if (profile.favorites.includes(req.params.id)) return res.redirect(`/games/${req.params.id}`);
        profile.favorites.push(req.params.id);
        profile.save(function(err) {
            res.redirect(`/games/${req.params.id}`);
        });
    });
}

function removeFav(req, res) {
    Profile.findById(req.user.profileId, function(err, profile) {
        profile.favorites.pull(req.params.id);
        profile.save(function(err) {
            res.redirect(`/games/${req.params.id}`);
        });
    });
}
