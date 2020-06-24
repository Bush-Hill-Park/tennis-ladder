const router = require('express').Router();
let Matchhistory = require('../models/matchhistory.models');


router.route('/').get((req, res) => {
    Matchhistory.find()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

router.route('/').post(async (req,res) => {

    var datetime = new Date();
    const player_one = req.body.name;
    const player_two = req.body.opponent;
    const winner = req.body.did_win == "No" ? player_two: player_one;
    const done = await Matchhistory.create({
        player_one: player_one,
        player_two: player_two,
        winner: winner,
        datePlayed: datetime
    });
    
    Matchhistory.find()
    .then(user => res.json(user))
    .catch(err => console.log(err));

});



module.exports = router;