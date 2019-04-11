const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Chat = new Schema({
    name : {
      type: String
    },
    msg : {
        type: String
      },
    date: {
      type: Date
    },
  },
  {
    collection: 'Chats'
  }, {timestamps: true});


module.exports = mongoose.model('Chat', Chat);
