var mongoose = require('mongoose');

  const  DB = 'mongodb://localhost:27017/PFE' ;
  //Configure Mongoose
mongoose.connect(DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('debug', true);
