var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
   id: String,
  email: String,
  password: String,
  role: String,
  nom:String,
  prenom: String,
  tel: Number,
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
UserSchema.methods.removeFromCart = function(sessionId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.sessionId.toString() !== sessionId.toString();
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
