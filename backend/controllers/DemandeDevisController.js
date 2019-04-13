var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var DemandeDevis = require('../Models/DemandeDevis');

// CREATES A NEW DemandeDevis
router.post('/Create', function (req, res) {
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
        Message:  req.body.Mssage,   
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

// DELETES A DemandeDevis FROM THE DATABASE
router.delete('/DeleteOne/:id', function (req, res) {
    DemandeDevis.findByIdAndDelete(req.params.id, function (err, demande) {
        if (err) return res.status(500).send("There was a problem deleting the demande.");
        res.status(200).send("demande:   was deleted.");
    });
});

module.exports = router;