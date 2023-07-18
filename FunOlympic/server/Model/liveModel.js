const mongoose = require('mongoose');

const liveSchema = new mongoose.Schema({
    title: { type: String, required: true },
    photo: { type: String },
    link: { type: String },
    game: { type: String },
    team1: { type: String },
    team2: { type: String },
    startDate: { type: Date },
    description: { type: String },
    islive: { type: Boolean, default: true }
});



const Live = mongoose.model('Live', liveSchema);
module.exports = Live;