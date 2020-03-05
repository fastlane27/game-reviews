const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userName: String,
    userAvatar: String,
    about: String,
    favorites: [Schema.Types.ObjectId]
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
