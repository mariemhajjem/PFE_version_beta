const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Event = new Schema({
    name : {
      type: String
    },
    date: {
      type: String
    },
    Description : {
      type : String
    }
  },
  {
    collection: 'events'
  }, {timestamps: true});


module.exports = mongoose.model('Event', Event);
