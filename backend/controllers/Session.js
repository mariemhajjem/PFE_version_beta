const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./VerifyToken');
const nodemailer = require('nodemailer');
const creds = require('../config/contactConfig');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Require formation model in our routes module
let Formation = require('../Models/formation');
let Session = require('../Models/Session');
let formateur = require('../Models/Partenaire');
let User = require('../Models/User');
let Order = require('../Models/order');


var transport = {
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
}


var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/sendConfirmation/:id', async(req, res, next) => {
  let id =req.params.id;
  const order = await Order.findOne({_id : id});
  var name ="digitalis"
  var email = order.user.name
  var mail = {
    from: name,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Nouveau message digitalis',
    html: "<h2>Réservation acceptée</h2></br><p>Votre demande de réservation a été confirmée.<br>Merci pour votre confiance,<br>  Equipe Digitalis Plus</p>"
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});
router.post('/sendRefuse/:id', async(req, res, next) => {
  let id =req.params.id;
  const order = await Order.findOne({_id : id});
  var name = "digitalis"
  var email = order.user.name
  var mail = {
    from: name,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Nouveau message de digitalis',
    html: "<h2>Réservation refusée</h2></br><p>Nous sommes vraiement désolé, votre demande de réservation a été refusée.<br> Equipe Digitalis Plus</p>"
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});

router.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Session.findById(id, function (err, session){
      res.json(session);
  });
});

//  Defined update route
router.route('/update/:id').put(function (req, res, next) {
  let id = req.params.id;
  Session.findById(id, function(err, session) {
    if (!session)
      return next(new Error('Could not load Document'));
    else {
      session.name = req.body.name;
      session.date = req.body.date;
      session.NbPlaces = req.body.NbPlaces;
      session.Horaires=req.body.Horaires;
      session.NbHeures=req.body.NbHeures;
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
    Session.findByIdAndRemove({_id: req.params.id}, function(err, session){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

router.route('/:id/:ida').post(async (req, res)=> {
  let id = req.params.id;
  let ida = req.params.ida;
  const formation = await Formation.findOne({_id : id});
  const formateu = await formateur.findOne({_id : ida});
  var session = new Session();
  session.name = req.body.name;
  session.date = req.body.date;
  session.Formations= formation._id;
  session.NbPlaces = req.body.NbPlaces;
  session.Horaires=req.body.Horaires;
  session.NbHeures=req.body.NbHeures;
  session.Formateur=formateu._id;
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

router.route('/addCart/:id').post(VerifyToken, function(req, res){
  let id = req.params.id;
  Session.findById(id)
    .then(session => {
      User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (user){ user.addToCart(session);
          session.userId.push(user);
          session.quanti = session.userId.length;
          return  session.save();}
      });
    })
    .then(result => {
      console.log(result);
      res.status(200).json({'cart': 'session added to cart'});
    });
});
router.route('/CartdelPro/:id').post(VerifyToken, function(req, res){
  let id = req.params.id;
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (user) return  user.removeFromCart(id);
})
.then(result => {
  res.status(200).json({'cart': 'item deleted'});
});
});
router.route('/getCart').get(VerifyToken, function(req, res){
  req.user.populate({ path:'cart.items.sessionId' , model: 'Session', select: { 'name': 1, 'Formations' : 1},
  populate: {
    path: 'Formations',
    model: 'Formation'
  }  }).exec(function (err, user){
    res.json(user.cart.items)})
});
router.route('/postReservation').put(VerifyToken, function(req, res){
req.user.populate({ path:'cart.items.sessionId' , model: 'Session', select: { '_id': 1}}).exec(function (err, user){
      const sessions = user.cart.items.map(i => {
        return {  session: { ...i.sessionId._doc } };
      });
      const order = new Order({
        user: {
          name: user.email,
          userId: req.userId
        },
        sessions: sessions
      });
      return order.save().then(result =>{ user.clearCart();});})
});
router.route('/getReservations').get(VerifyToken, function(req, res){
  Order.find({ 'user.userId': req.userId },function(err, order){
    if (err) return res.status(500).send("hmmm.");
            res.status(200).send(order);
  })
});
router.route('/getAllReservations').get(VerifyToken, function(req, res){
  Order.find({},function(err, order){
    if (err) return res.status(500).send("hmmm.");
            res.status(200).send(order);
  })
});
router.route('/deleteOrder/:id').get(function (req, res) {
  Order.findByIdAndRemove({_id: req.params.id}, function(err, Order){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

router.route('/statSession').get(function (req, res){
  Session.find({},{name: 1,quanti: 1,_id: 0}, function(err, session){
    if (err) res.json(err);
    else res.json(session);
  })
})


module.exports = router;
