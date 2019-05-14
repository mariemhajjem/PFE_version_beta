const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Event = new Schema({
    name : {
      type: String
    },
    date: {
      type: Date
    },
    Description : {
      type : String
    } ,
  imageUrl: {
    type: String
  },
  temps : {
    type : Date
  } ,
} ,
  {
    collection: 'events'
  }, {timestamps: true});


module.exports = mongoose.model('Event', Event);
