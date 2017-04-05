/**
 * Created by devon on 2017-03-29.
 */
let express = require('express');
let router = express.Router();

// reference model
let Game = require('../models/game');

// get all
router.get('/', function (req, res, next) {
   Game.find(function(err, games) {
       if (err) {
           return res.sent(err).status(501);
       }
       res.json(games);
   });
});

module.exports = router;