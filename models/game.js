const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { 
        type: String,
        required: true,
        match: /\S/
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    createdBy: Schema.Types.ObjectId,
    userName: String,
    userAvatar: String
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
}, {
    timestamp: true
});

module.exports = mongoose.model('Game', gameSchema);
