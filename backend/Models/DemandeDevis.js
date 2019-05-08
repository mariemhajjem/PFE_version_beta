var mongoose = require('mongoose');
var DemandeSchema = new mongoose.Schema({

    Nom: String,
    Prenom: String,
    Tel: Number,
    Email: String,
    Adresse: String,
    Entreprise: String,
    Fonction : String,
    DomaineActivite: String,
     Description: String,
    Message: String,


    cahierDeCharge: String,

});
mongoose.model('Demande', DemandeSchema);

module.exports = mongoose.model('Demande');
