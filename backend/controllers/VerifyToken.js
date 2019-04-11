var jwt = require('jsonwebtoken');

//middleware function:handle all the authorization 
function verifyToken(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send('Unauthorized.');
   let token= req.headers.authorization.split(' ')[1];

  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'token'){
    jwt.verify(token,'secret', function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
     
    next();
    });
   }
  else
  { 
    return res.status(401).send('Unauthorized.');
  }
}
module.exports = verifyToken;