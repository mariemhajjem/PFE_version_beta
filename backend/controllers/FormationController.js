const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const multer = require('multer');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



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

// Require formation model in our routes module
let Formation = require('../Models/formation');
let Session = require('../Models/Session');
let User = require('../Models/User');
// Defined store route
router.route('/add').post(upload.single('imageUrl'),function (req, res) {
  const nameFormation = req.body.nameFormation;
  const type= req.body.type;
  const Description = req.body.Description;
  const Plan = req.body.Plan;
  const Sujet =req.body.Sujet;
  const Categorie=req.body.Categorie;
  const imageUrl = "assets/uploads/"+req.file.filename ;
  let formation = new Formation ({
    nameFormation: nameFormation,
    type: type,
    imageUrl: imageUrl,
    Description: Description,
    Plan: Plan,
    Sujet: Sujet,
    Categorie : Categorie

  });
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
  Formation.find().populate({ path:'Sessions' , model: 'Session', select: { 'name': 1,'dateDebut': 1,'dateFin': 1,'Formateur': 1,'NbPlaces': 1,'NbHeures': 1, '_id' : 0} }).exec(function (err, formations){
    if(err){
      console.log(err);
    }
    else {
      res.json(formations);
    }
  });;
});

router.route('/limit').get(function (req, res) {
  Formation.find().limit(3).populate({ path:'Sessions' , model: 'Session', select: { 'name': 1,'dateDebut': 1,'dateFin': 1,'Formateur': 1,'NbPlaces': 1,'NbHeures': 1, '_id' : 0} }).exec(function (err, formations){
    if(err){
      console.log(err);
    }
    else {
      res.json(formations);
    }
  });;
});

// Defined edit route
router.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Formation.findById(id).populate([{path:'Cmts' , model: 'Comment', select: { 'Sujet': 1,'User': 1, '_id' : 0,'date':1},
  populate: {
    path: 'User',
    model: 'User',
    select: { 'email': 1,'imageUrl': 1}
  }},{path:'Sessions', model:'Session',  populate: {
    path: 'Formateur',
    model: 'partenaire', 
  } }]).exec(function (err, formation){
      res.json(formation);
  });
});

//  Defined update route
router.route('/update/:id').put(upload.single('imageUrl'),function (req, res) {
  Formation.findById(req.params.id, function(err, formation) {
    if (!formation)
      return next(new Error('Could not load Document'));
    else {
        formation.nameFormation = req.body.nameFormation;
        formation.type= req.body.type;
        formation.nb = req.body.nb;
        formation.Description = req.body.Description;
        formation.Plan = req.body.Plan;
        formation.Sujet = req.body.Sujet;
      //formation.imageUrl = "assets/uploads/"+req.file.filename;
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
