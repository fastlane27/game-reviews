const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userName: String,
    userAvatar: String,
    about: String,
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
