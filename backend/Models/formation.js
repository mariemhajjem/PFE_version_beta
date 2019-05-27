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
   },
   Categorie : {
    type : String
  },
   Sessions:[{type: mongoose.Schema.Types.ObjectId, ref:'Session'}],
   Cmts:[{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
},{
  collection: 'formations'
});
Formation.methods.removeFromSessions = function(session) {
  const updatedSessions = this.Sessions.filter(item => {
    return item._id.toString() !== session.toString();
  });
  this.Sessions = updatedSessions;
  return this.save();
};
module.exports = mongoose.model('Formation', Formation);
