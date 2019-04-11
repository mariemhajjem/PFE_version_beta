var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var User =require('../Models/User');

passport.use(new LocalStrategy({
    emailField: 'user[email]',
    passwordField: 'user[password]'
}, function(email, password, done){
    User.findOne({email: email}).then(function(user){
        if(!user || !user.validPassword(password)){
            return done(null, false, {errors: {"email or password":"is invalid."}})
        }
        return done(null, user);
    }).catch(done);
}));