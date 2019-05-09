const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Formation = require('../Models/formation');
const User = require('../Models/User');
let Session = new Schema({
    name : {
      type: String
    },
    dateDebut: {
      type: Date
    },
    dateFin: {
      type: Date
    },

    Formations:{
      type: mongoose.Schema.Types.ObjectId, ref:'Formation'
    },
    Formateur : {
      type : String
    },
    NbPlaces : {
      type : Number
    },
    Horaires : {
      type : Date
    },
    NbHeures : {
      type : Number
    },
    userId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }]

  },
  {
    collection: 'sessions'
  }, {timestamps: true});


module.exports = mongoose.model('Session', Session);
