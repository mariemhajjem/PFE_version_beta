var mongoose = require('mongoose');  
var DemandeSchema = new mongoose.Schema({  
 
    Nom: String,
    Prenom: String,
    Tel: String,
    Email: String,
    Adresse: String,
    Entreprise: String,
    Fonction : String,
    DomaineActivite: String,
     Description: String,
    Message: String,       
    
    
    cahierDeCharge: File,
                                                                                                 
});
mongoose.model('Demande', DemandeSchema);

module.exports = mongoose.model('Demande');