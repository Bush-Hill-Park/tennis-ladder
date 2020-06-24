const router = require('express').Router();
let Rank = require('../models/rank.models');

router.route("/").get((req, res) =>{ 
    Rank.find()
    .then(user => res.json(user))
    .catch(err => console.log(err));

});


router.route("/:uid").get((req, res) =>{
    console.log(req.params.uid)
    Rank.findById(req.params.uid)
        .then(user =>res.json(user))
        .catch(err => res.status(400).json("Error " + err))
});

router.route("/:uid").post((req, res) =>{
    var query = {'_id': req.params.uid};
    
    //we're passed in the name, rank, and current rankings from the site
    const name = req.body.name;
    const opponent = req.body.opponent;
    const did_win = req.body.did_win;
    var rankings = req.body.rankings;
    console.log(name);
    console.log(opponent);
    console.log(did_win);

    var user_rank = 0;
    var opponent_rank = 0;
    for (var i =0; i< rankings.length; i++){
        if(name === rankings[i][0]){
            user_rank = i
        }
        if(opponent === rankings[i][0]){
            opponent_rank = i
        }
    }
    var user_better_rank = user_rank < opponent_rank;
    console.log(rankings[opponent_rank]);
    if(did_win == "Yes"){
        if(user_better_rank){
            console.log(`${name} beat ${opponent} on DATE??? and didnt drop`)
        }
        else{
            console.log(`${name} beat ${opponent} on DATE??? and took rank ${opponent_rank+1}`)
            //take the winnners rank
            var temp = rankings[user_rank]
            var old_opponent_rank = opponent_rank
            //start from the right at the winners rank
            for(var i=user_rank-1; i>= opponent_rank; i--){
                rankings[i+1] = rankings[i];
                rankings[i+1][1] +=1                
            }
            rankings[old_opponent_rank] = temp
            console.log(rankings);
            rankings[old_opponent_rank][1] = old_opponent_rank+1
            rankings[old_opponent_rank+1][1] = old_opponent_rank +2
            console.log(rankings);
        }
    }
    else{
        if(user_better_rank){
            console.log(`${opponent} beat ${name} on DATE and took rank ${opponent_rank+1}`)
            //take the winnners rank
            var temp = rankings[opponent_rank]
            //save old user's rank because they lost
            var old_user_rank = user_rank
            //start from the right at the winners rank
            for(var i=opponent_rank-1; i>= user_rank; i--){
                rankings[i+1] = rankings[i];
                rankings[i+1][1] +=1
            }
            rankings[old_user_rank] = temp
            console.log(rankings);
            rankings[old_user_rank][1] = old_user_rank+1
            rankings[old_user_rank+1][1] = old_user_rank +2
            console.log(rankings)
            
        }
        else{
            console.log(`${opponent} beat ${name} on DATE??? and didnt drop`)
        }
    }
    Rank.findOneAndUpdate(query, {'rankings': rankings}, {upsert: false}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send(rankings);
    });


});

module.exports = router;