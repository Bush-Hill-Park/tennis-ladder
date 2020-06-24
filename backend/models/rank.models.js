const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankSchema = new Schema({
    rankings: Array
});


const Rank = mongoose.model('Rank', rankSchema);

module.exports = Rank;