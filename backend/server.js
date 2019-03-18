var app = require('./app');
var port = process.env.PORT || 8000;
const cors = require ('cors');

app.use(cors())
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});