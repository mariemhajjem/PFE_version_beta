// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_xLUqYjccAQ24lnwmlSLijPQ400TQfWmD9d");

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'mariemhajjem10@gmail.com',
  });
})();