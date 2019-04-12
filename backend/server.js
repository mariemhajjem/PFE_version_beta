var app = require('./app');
var port = process.env.PORT || 3000;
const cors = require ('cors');
const whitelist = ['http://localhost:4200' ];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}
app.use(cors(corsOptions))

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
