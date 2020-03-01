const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    createdBy: Schema.Types.ObjectId
}, {
    timestamps: true
});

const gameSchema = new Schema({
    title: String,
    developer: String,
    publisher: String,
    releaseDate: Date,
    genre: String,
    platform: String,
    reviews: [reviewSchema],
    favoritedBy: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }]
}, {
    timestamp: true
});

module.exports = mongoose.model('Game', gameSchema);
