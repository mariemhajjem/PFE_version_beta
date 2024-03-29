var express = require('express');
var router = express.Router();
const multer = require('multer');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Partenaire = require('../Models/Partenaire');
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

// CREATES A NEW DemandeDevis
router.post('/Create',upload.single('imageUrl'),function (req, res) {
    Partenaire.create({
        name : req.body.name,
        job: req.body.job,
        imageUrl: "assets/uploads/"+req.file.filename
        },
        function (err, partenaire) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(partenaire);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/List', function (req, res) {
    Partenaire.find({}, function (err, partenaire) {
        if (err) return res.status(500).send("There was a problem finding the partnaire.");
        res.status(200).send(partenaire);
    });
});
// GETS A SINGLE partenaire FROM THE DATABASE
router.get('/GetOne/:id', function (req, res) {
    Partenaire.findById(req.params.id, function (err, partenaire) {
        if (err) return res.status(500).send("There was a problem finding the partnaire.");
        if (!partenaire) return res.status(404).send("No partnaire found.");
        res.status(200).send(partenaire);
    });
});

// DELETES A Partenaire FROM THE DATABASE
router.delete('/DeleteOne/:id', function (req, res) {
    Partenaire.findByIdAndDelete(req.params.id, function (err, partenaire) {
        if (err) return res.status(500).send("There was a problem finding the partnaire.");
        res.status(200).send("Partnaire:   was deleted.");
    });
});

module.exports = router;
