var express = require('express');
var router = express.Router();
var User = require('../Models/User');
var formation = require('../Models/formation');
var session = require('../Models/Session');

router.get('/form', function(req,res,next) {

    var noMatch = null;
    if(req.query.q) {
        const regex = new RegExp(req.query.q);
        // Get all  from DB
        
        formation.find({nameFormation: {$regex : regex, $options: "ig"}},
            {
                __v : 0
            }, function(err, allformations){
           if(err){
               console.log(err);
           } else {
              if(allformations.length < 1) {
                  noMatch = "No formations match that query, please try again.";
              }
              res.json(allformations);
           }
        });
    } else {
        // Get all formations from DB
        formation.find({}, function(err, allformations){
           if(err){
               console.log(err);
           } else {
              res.send({formation:allformations, noMatch: noMatch});
           }
        });
    }
});
router.get('/ParCategorie', function(req,res,next) {

    var noMatch = null;
    if(req.query.q) {
      //  const regex = new RegExp(escapeRegex(req.query.q));
        // Get all  from DB
        formation.find({Categorie:req.query.q},
            {
                __v : 0
            }, function(err, allformations){
           if(err){
               console.log(err);
           } else {
              if(allformations.length < 1) {
                  noMatch = "No formations match that query, please try again.";
              }
              res.json(allformations);
           }
        });
    } else {
        // Get all formations from DB
        formation.find({}, function(err, allformations){
           if(err){
               console.log(err);
           } else {
              res.send({formation:allformations, noMatch: noMatch});
           }
        });
    }
});
router.get('/bestformation', function(req,res,next) {

    var noMatch = null;

        // Get all formations from DB
        session.find({}, function(err, sessions){
            if(err){
                console.log(err);
            } else {
               res.json(sessions);
            }
         }).sort({quanti: -1}).limit(3);
    });

router.get('/user', function(req,res,next) {
    var q = req.query.q;

    //Recherche partielle
    User.find({
        email: {
            $regex : new RegExp(q)
        }
    },
    {
        _id : 0,
        __v : 0
    }, function(err,data){
        res.json(data);
    }).limit(10);

});
module.exports = router;
