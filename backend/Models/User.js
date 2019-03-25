var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
 
  email: String,
  password: String,
  role: String,
   nom:String,
  prenom: String,
          
  tel: Number 
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');