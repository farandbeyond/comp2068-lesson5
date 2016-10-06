/**
 * Created by Connor on 2016-10-06.
 */

var express = require('express');
var game = require('../models/game');
var router = express.Router();

router.get('/', function(req,res,next){
    game.find(function(err, games){
        if(err){
            console.log(err);
            res.render('error');
        }
        else{
            res.render('games', {
                title: 'Vidja Games'

            })
        }

    });

})

module.exports = router;
