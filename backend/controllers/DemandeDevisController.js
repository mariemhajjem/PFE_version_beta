var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const multer = require('multer');
const creds = require('../config/contactConfig');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var DemandeDevis = require('../Models/DemandeDevis');
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/assets/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-')+"-"+ file.originalname);
  }
});
const upload =multer({
  storage: fileStorage
});
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
  const demande = await DemandeDevis.findOne({_id : id});
  var name = demande.Nom
  var email = demande.Email
  var mail = {
    from: name,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Nouveau message digitalis',
    html: '<h1>Demande accepter</h1>/</br>'
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
  const demande = await DemandeDevis.findOne({_id : id});
  var name = demande.Nom
  var email = demande.Email
  var mail = {
    from: name,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Nouveau message de digitalis',
    html: '<h1>Demande refusé</h1>/</br>'
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

// CREATES A NEW DemandeDevis
router.post('/Create',upload.single('cahierDeCharge'), function (req, res) {
    DemandeDevis.create({
        Nom : req.body.Nom,
        Prenom : req.body.Prenom   ,
        Tel : req.body.Tel,
        Email : req.body.Email,
        Adresse : req.body.Adresse,
        Entreprise : req.body.Entreprise,
        Fonction :  req.body.Fonction,
        DomaineActivite: req.body.DomaineActivite,
         Description: req.body.Description,
        Message:  req.body.Message,
        cahierDeCharge : req.file.path,
        Services : req.body.Services
        },
        function (err, demandeDevis) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(demandeDevis);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/List', function (req, res) {
    DemandeDevis.find({}, function (err, demandeDevis) {
        if (err) return res.status(500).send("There was a problem finding the demandeDevis.");
        res.status(200).send(demandeDevis);
    });
});
// GETS A SINGLE DemandeDevis FROM THE DATABASE
router.get('/GetOne/:id', function (req, res) {
    DemandeDevis.findById(req.params.id, function (err, demande) {
        if (err) return res.status(500).send("There was a problem finding the DemandeDevis.");
        if (!demande) return res.status(404).send("No demande found.");
        res.status(200).send(demande);
    });
});
//  Defined update route
router.route('/update/:id').put(function (req, res) {
  DemandeDevis.findById(req.params.id, function(err, demande) {
    if (!demande)
      return next(new Error('Could not load Document'));
    else {
        demande.confirm = true;
        console.log(req.body.confirm);
        demande.save().then(demande => {
         console.log(demande);
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// DELETES A DemandeDevis FROM THE DATABASE
router.delete('/DeleteOne/:id', function (req, res) {
    DemandeDevis.findByIdAndRemove({_id: req.params.id}, function(err, demande){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});
router.get('/OpenFile/:id', function (req, res) {
  DemandeDevis.findById(req.params.id, function (err, demande) {
      if (err) return res.status(500).send("There was a problem finding the DemandeDevis.");
      if (!demande) return res.status(404).send("No demande found.");
      fs.readFile(demande.cahierDeCharge, (err , data)=>{
        if(err){
          console.log(err);
        }else{
          console.log(data);
          res.send(data);
        }
      });
  });
});
module.exports = router;
