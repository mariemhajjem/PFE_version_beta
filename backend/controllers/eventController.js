const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const multer = require('multer');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Require formation model in our routes module
let Event = require('../Models/event');


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/assets/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-')+"-"+ file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload =multer({
  storage: fileStorage, fileFilter: fileFilter
});
router.post('/create',upload.single('imageUrl'), function (req, res) {
  const imageUrl = "assets/uploads/"+req.file.filename ;
  Event.create({

          name : req.body.name,
          date: req.body.date,
          Description: req.body.Description,
          imageUrl : imageUrl,
          temps : req.body.temps,
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
router.get('/edit/:id', function (req, res) {
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
router.put('/update/:id', function (req, res) {
  let id = req.params.id;
  Event.findById(id, function(err, event) {
    if (!event)
      return next(new Error('Could not load Document'));
    else {
      event.name = req.body.name;
      event.date = req.body.date;
      event.Description = req.body.Description;
      event.temps= req.body.temps;
       event.save().then(event => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


module.exports = router;
