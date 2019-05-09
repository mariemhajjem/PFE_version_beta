const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let partenaire = new Schema({
    name : {
      type: String
    },
    job : {
        type: String
      },
    imageUrl: {
        type: String
    },
  },
  {
    collection: 'partenaire'
  }, {timestamps: true});


module.exports = mongoose.model('partenaire', partenaire);
