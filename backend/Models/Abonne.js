var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config/db').secret;

var AbonneSchema = new mongoose.Schema({
    abonnename: {type: String, unique: true, required: [true, "cannot be empty."], lowercase: true, index: true},
    email: {type: String, unique: true, required: [true, "cannot be empty."], lowercase: true, index: true},
    bio: String,
    image: String,
    salt: String,
    hash: String
}, {timestamps: true});

AbonneSchema.plugin(uniqueValidator, {message: "is already taken."});

AbonneSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

AbonneSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

AbonneSchema.methods.generateJWT = function(){
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate()+60);
    return jwt.sign({
        id: this._id,
        abonnename: this.abonnename,
        exp: parseInt(exp.getTime()/1000)
    }, secret)
};

AbonneSchema.methods.toAuthJSON = function(){
    return {
        abonnename: this.abonnename,
        email: this.email,
        bio: this.bio,
        image: this.image,
        token: this.generateJWT()
    };
};
mongoose.model('Abonne', AbonneSchema);

