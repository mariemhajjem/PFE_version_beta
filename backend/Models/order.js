const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  sessions: [
    {
      session: { type: Object, required: true }
    }
  ],
  user: {
    name: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  confirm:
  { type: Boolean, default: false }

});

module.exports = mongoose.model('Order', orderSchema);
