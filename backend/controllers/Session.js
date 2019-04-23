const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());





// Require formation model in our routes module
let Formation = require('../Models/formation');
let Session = require('../Models/Session');

router.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Session.findById(id, function (err, session){
      res.json(session);
  });
});

//  Defined update route
router.route('/update/:id').put(function (req, res) {
  Session.findById(req.params.id, function(err, session) {
    if (!session)
      return next(new Error('Could not load Document'));
    else {
      session.name = req.body.name;
      session.dateDebut = req.body.dateDebut;
      session.Formations= formation._id;
      session.dateFin = req.body.dateFin;

       session.save().then(formation => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
router.route('/delete/:id').get(function (req, res) {
    Session.findByIdAndRemove({_id: req.params.id}, function(err, formation){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

router.route('/:id').post(async (req, res)=> {
  let id = req.params.id;
  const formation = await Formation.findOne({_id : id});
  var session = new Session();
  session.name = req.body.name;
  session.dateDebut = req.body.dateDebut;
  session.Formations= formation._id;
  session.dateFin = req.body.dateFin;
  session.NbPlaces=req.body.NbPlaces;
  session.save();

  formation.Sessions.push(session);
  formation.save()
  .then(formation => {
    res.status(200).json({'formation': 'session is added successfully'});
  })


});
router.route('/').get(function (req, res) {
    Session.find().populate({ path:'Formations' , model: 'Formation', select: { 'nameFormation': 1, '_id' : 0} }).exec(function (err, session){
      if(err){
        console.log(err);
      }
      else {
        res.json(session);
      }
    });
  });
module.exports = router;
