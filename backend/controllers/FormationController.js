const express = require('express');

const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// Require formation model in our routes module
let Formation = require('../Models/formation');

// Defined store route
router.route('/add').post(function (req, res) {
  let formation = new Formation (req.body);
  formation.save()
    .then(formation => {
      res.status(200).json({'formation': 'formation is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
    Formation.find(function (err, formations){
    if(err){
      console.log(err);
    }
    else {
      res.json(formations);
    }
  });
});

// Defined edit route
router.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Formation.findById(id, function (err, formation){
      res.json(formation);
  });
});

//  Defined update route
router.route('/update/:id').put(function (req, res) {
  Formation.findById(req.params.id, function(err, formation) {
    if (!formation)
      return next(new Error('Could not load Document'));
    else {
        formation.nameFormation = req.body.nameFormation;
        formation.type= req.body.type;
        formation.nb = req.body.nb;

        formation.save().then(formation => {
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
    Formation.findByIdAndRemove({_id: req.params.id}, function(err, formation){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = router;
