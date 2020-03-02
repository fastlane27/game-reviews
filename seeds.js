require('dotenv').config();
require('./config/database');

const Game = require('./models/game');
const data = require('./data');

Game.deleteMany({})
.then(function(results) {
    console.log(results);
    return Game.create(data.games);
})
.then(function(games) {
    console.log(games);
    process.exit();
})
.catch(function(err) {
    console.log(err);
});
