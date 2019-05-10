const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Message = require('../Models/Message');

router.post('/Create', function (req, res) {
  Message.create({
      name : req.body.name,
      email : req.body.email,
      message : req.body.message
      },
      function (err, Message) {
          if (err) return res.status(500).send("There was a problem adding the information to the database.");
          res.status(200).send(Message);
      });
});
router.get('/List', function (req, res) {
  Message.find({}, function (err, Message) {
      if (err) return res.status(500).send("There was a problem finding the Message.");
      res.status(200).send(Message);
  });
});
router.delete('/DeleteOne/:id', function (req, res) {
  Message.findByIdAndDelete(req.params.id, function (err, demande) {
      if (err) return res.status(500).send("There was a problem deleting the demande.");
      res.status(200).send("demande:   was deleted.");
  });
});



module.exports = router;
