const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema(
{ 
   Sujet : {
     type : String
   },
   date :Date,
   User : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
   formation : {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Formation'
   }
},
{
  collection: 'cmts'
});

module.exports = mongoose.model('Comment', Comment);