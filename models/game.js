const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Game', gameSchema);
