const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rankhistorySchema = new Schema({
    rankings: {type: Array},
    dateSaved: {type: Date}
});


const Rankhistory = mongoose.model('Rankhistory', rankhistorySchema);

module.exports = Rankhistory;