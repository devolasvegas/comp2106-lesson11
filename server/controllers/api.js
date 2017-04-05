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

//post
router.post('/', function(req, res, next) {
    let newGame = new Game(req.body);

    newGame.save(function(err, game) {
        if(err) {
            console.log(err);
            return res.json(err).status(501);
        }
        res.json(game).status(201);
    });
});

// delete
router.delete('/:_id', function(req, res, next){
    Game.remove({ _id: req.params._id }, function(err, game) {
        if (err) {
            console.log(err);
            return res.json(err).status(501);
        }
        res.json(game).status(200);
    });
});

// update
router.put('/:_id', function(req, res, next) {
   Game.update({ _id: req.params._id }, req.body, function(err, game) {
       if (err) {
           console.log(err);
           return res.json(err).status(501);
       }
       res.json(game).status(200);
   })
});

module.exports = router;