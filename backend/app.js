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

    let http = require("http").Server(app);
    let io = require("socket.io")(http);
    
    io.on("connection", socket => {
      // Log whenever a user connects
      console.log("user connected");
    
      // Log whenever a client disconnects from our websocket server
      socket.on("disconnect", function() {
        console.log("user disconnected");
      });
    
      // When we receive a 'message' event from our client, print out
      // the contents of that message and then echo it back to our client
      // using `io.emit()`
      socket.on("message", message => {
        console.log("Message Received: " + message);
        io.emit("message", { type: "new-message", text: message });
      });
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
 
module.exports = app;
