var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var UserSchema = new mongoose.Schema({
   id: String,
  email: {type:String ,unique: true},
  password: String,
  role: String,
  nom:String,
  prenom: String,
  resetToken: String,
  resetTokenExpiration: Date,
  tel: Number,
  age : { type: Number, default: 0 },
  Niveau : { type: String, default: '' },

  cart: {
    items: [
      {
        sessionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Session',
          required: true
        }
      }
    ]
  }
});
UserSchema.plugin(uniqueValidator);

UserSchema.methods.toAuthJSON = function(){
  return {
      email: this.email,
      role: this.role,
      nom: this.nom,
      prenom: this.prenom
  };
};
UserSchema.methods.addToCart = function(Session) {
  const cartSessionIndex = this.cart.items.findIndex(cp => {
    return cp.sessionId.toString() === Session._id.toString();
  });
  const updatedCartItems = [...this.cart.items];

  if (cartSessionIndex >= 0) {
  } else {
    updatedCartItems.push({
      sessionId: Session._id,
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};
UserSchema.methods.removeFromCart = function(session) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item._id.toString() !== session.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
};

UserSchema.methods.clearCart = function() {
  this.cart = { items: [] };
  return this.save();
};
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
