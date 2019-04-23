var express = require('express');
var app = express();
var db = require('./config/db');


//create a cors middleware
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

 var SearchController = require('./controllers/Search');
 app.use('/recherche', SearchController) ;

var UserController = require('./controllers/UserController');
app.use('/users', UserController);

var ContactController= require('./controllers/ContactController');
app.use('/contact',ContactController);

var AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

var DemandeDevisController = require('./controllers/DemandeDevisController');
app.use('/demande',DemandeDevisController);

var FormationController = require('./controllers/FormationController');
app.use('/formation',FormationController);

var session = require('./controllers/Session');
app.use('/session',session);

var partenaire = require('./controllers/PartenaireController');
app.use('/partenaire',partenaire);

var cmt = require('./controllers/Comment');
app.use('/cmt',cmt);

module.exports = app;
