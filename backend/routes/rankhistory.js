const router = require('express').Router();
let Rankhistory = require('../models/rankhistory.models');


router.route("/").post((req, res) => {
    var datetime = new Date();
    Rankhistory.create({rankings:req.body.rankings, dateSaved: datetime});

});


module.exports = router;