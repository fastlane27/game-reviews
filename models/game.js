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
    createdBy: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
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
