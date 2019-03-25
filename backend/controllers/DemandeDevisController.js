var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var DemandeDevis = require('../Models/DemandeDevis');

// CREATES A NEW DemandeDevis
router.post('/Create', function (req, res) {
    DemandeDevis.create({
        Nom : req.body.nom,
        Prenom : req.body.prenom   ,              
        Tel : req.body.tel,                                                  
        Email : req.body.email,
        Adresse : req.body.adresse,
        Entreprise : req.body.entreprise,
        Fonction :  req.body.fonction,
        DomaineActivite: req.body.domaine,
         Description: req.body.descri,
        Message:  req.body.message,   
        }, 
        function (err, demandeDevis) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(demandeDevis);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/List', function (req, res) {
    DemandeDevis.find({}, function (err, DemandeDeviss) {
        if (err) return res.status(500).send("There was a problem finding the DemandeDeviss.");
        res.status(200).send(DemandeDeviss);
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
        res.status(200).send("demande: "+ demande.email +" was deleted.");
    });
});

module.exports = router;