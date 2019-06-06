const mongoose = require('mongoose');

function dbconnect (db ){
  mongoose.set('useFindAndModify', false);

  console.log ('Mongo DB : ',db)
  mongoose.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
}



module.exports = dbconnect