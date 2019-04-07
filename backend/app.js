var express = require('express');
var app = express();
var db = require('./config/db');
require('./config/passport');

//create a cors middleware
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

var FormationController = require('./controllers/FormationController');
app.use('/formation',FormationController);

var AbonneController = require('./controllers/AbonneController');
app.use('/abonne',AbonneController);
 
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
module.exports = app;
