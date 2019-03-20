const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Formation = new Schema({
  nameFormation : {
    type: String
  },
  type: {
    type: String
  },
  nb: {
    type: Number
  }
},{
  collection: 'formations'
});

module.exports = mongoose.model('Formation', Formation);
