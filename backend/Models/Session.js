const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Formation = require('../Models/formation');
const User = require('../Models/User');
let Session = new Schema({
    name : {
      type: String
    },
    date: {
      type: String
    },
    Formations:{
      type: mongoose.Schema.Types.ObjectId, ref:'Formation'
    },
    Formateur :{
      type :  mongoose.Schema.Types.ObjectId, ref:'partenaire'
    },
    NbPlaces : {
      type : Number
    },
    Horaires : {
      type : String
    },
    NbHeures : {
      type : Number
    },
    userId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    quanti :{
      type : Number
    }

  },
  {
    collection: 'sessions'
  }, {timestamps: true});

  Session.methods.addToUserId = function(User) {
    const cartSessionIndex = this.userId.findIndex(cp => {
      return cp._id.toString() === User._id.toString();
    });
    const updatedCartItems = [...this.userId];

    if (cartSessionIndex >= 0) {
    } else {
      updatedCartItems.push(User._id);
    }
    this.userId = updatedCartItems;
  };


module.exports = mongoose.model('Session', Session);
