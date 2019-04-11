var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../Models/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var VerifyToken = require('./VerifyToken');
var auth = require('./auth');

router.post('/register', function(req, res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({

      email : req.body.email,
      role : req.body.role,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      let payload = { id: user._id , role:user.role, email : user.email }
      var token = jwt.sign(payload, 'secret', {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({token:token});
    });
  });

  router.get('/profile',VerifyToken, function(req, res, next) {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      res.status(200).send({user:user});
    });
});

router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');

      if (!user) return res.status(404).send('No user found.');

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
       let payload = { id: user._id , role:user.role, email : user.email };
      var token = jwt.sign(payload, 'secret', {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });
  });

  router.get('/logout', function(req, res) {
    res.status(200).send({ auth: false, token: null });
  });
  module.exports = router;
