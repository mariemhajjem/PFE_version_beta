var express = require('express');
var app = express();
var db = require('./config/db');

var UserController = require('./controllers/UserController');
app.use('/users', UserController);

var AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;