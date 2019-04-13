const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Formation = new Schema({
  nameFormation : {
    type: String
  },
  type: {
    type: String
  },
  imageUrl: {
    type: String
  },
   Plan:{
     type : String
   },
   Sujet : {
     type : String
   },
   Description : {
     type : String
   }
},{
  collection: 'formations'
});

module.exports = mongoose.model('Formation', Formation);
