const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchhistorySchema = new Schema({
    player_one: String,
    player_two: String,
    winner: String,
    datePlayed: Date
})

const Matchhistory = mongoose.model('Matchhistory', matchhistorySchema);


module.exports = Matchhistory;