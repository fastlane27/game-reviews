const Profile = require('../models/profile');

module.exports = {
    index,
    addFav,
    removeFav
};

function index(req, res) {
    // Profile.findById(req.)
    res.render('profiles/index');
}

function addFav(req, res) {
    Profile.findOne({ 'userId': req.user._id }, function(err, profile) {
        console.log(profile._id);
    });
}

function removeFav(req, res) {

}

// function addFav(req, res) {
//     Game.findById(req.params.id, function(err, game) {
//         if (game.favoritedBy.includes(req.user._id)) return res.redirect(`/games/${game._id}`);
//         game.favoritedBy.push(req.user._id);
//         game.save(function(err) {
//             res.redirect(`/games/${game._id}`);
//         });
//     });
// }

// function removeFav(req, res) {
//     Game.findById(req.params.id, function(err, game) {
//         game.favoritedBy.pull(req.user._id);
//         game.save(function(err) {
//             res.redirect(`/games/${game._id}`);
//         });
//     });
// }
