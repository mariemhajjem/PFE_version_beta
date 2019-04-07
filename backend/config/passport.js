var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var Abonne =require('../Models/Abonne');

passport.use(new LocalStrategy({
    abonnenameField: 'abonne[email]',
    passwordField: 'abonne[password]'
}, function(email, password, done){
    Abonne.findOne({email: email}).then(function(user){
        if(!user || !user.validPassword(password)){
            return done(null, false, {errors: {"email or password":"is invalid."}})
        }
        return done(null, user);
    }).catch(done);
}));