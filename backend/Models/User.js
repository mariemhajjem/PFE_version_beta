var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
   id: String,
  email: String,
  password: String,
  role: String,
  nom:String,
  prenom: String,
  tel: Number,
  Panier : {
    type : mongoose.Schema.Types.ObjectId, ref:'Session'
  }
});

UserSchema.methods.toAuthJSON = function(){
  return {
      email: this.email,
      role: this.role,
      nom: this.nom,
      prenom: this.prenom
  };
};
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
