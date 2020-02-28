module.exports = {
    index
};

function index(req, res) {
    res.render('games/index', { user: req.user });
}
