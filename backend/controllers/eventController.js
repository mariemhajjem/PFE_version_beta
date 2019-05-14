const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Require formation model in our routes module
let Event = require('../Models/event');

router.post('/create', function (req, res) {
  Event.create({

          name : req.body.name,
          date: req.body.date,
          description: req.body.description
      },
      function (err, Event) {
          if (err) return res.status(500).send("There was a problem adding the information to the database.");
          res.status(200).send(Event);
      });
});

router.get('/', function (req, res) {
  Event.find({}, function (err, events) {
      if (err) return res.status(500).send("There was a problem finding the Events.");
      res.status(200).send(events);
  });
});

// GETS A SINGLE Event FROM THE DATABASE
router.get('/:id', function (req, res) {
  Event.findById(req.params.id, function (err, event) {
      if (err) return res.status(500).send("There was a problem finding the Event.");
      if (!event) return res.status(404).send("No Event found.");
      res.status(200).send(event);
  });
});

// DELETES A Event FROM THE DATABASE
router.delete('delete/:id', function (req, res) {
  Event.findByIdAndRemove({_id: req.params.id}, function (err, event) {
      if (err) return res.status(500).send("There was a problem deleting the Event.");
      res.status(200).send(event);
  });
});

// UPDATES A SINGLE Event IN THE DATABASE
router.put('update/:id', function (req, res) {
  Event.findOneAndUpdate(req.params.id, req.body, {new: true}, function (err, event) {
      if (err) return res.status(500).send("There was a problem updating the Event.");
      res.status(200).send(event);
  });
});


module.exports = router;
