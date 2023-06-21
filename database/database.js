

//'use strict'-
require('dotenv').config();
const mongoose = require('mongoose');


 mongoose.connect(`${process.env.DB_CONNECTION}`, {
   useNewUrlParser: true,
   // useCreateIndex: true,
   // useFindAndModify: false,
   useUnifiedTopology: true
 }).then(() => console.log("DB connected to les délices mauricens DB"))

var db = mongoose.connection;

module.exports = function () {
  db.on('error_msg', console.error.bind(console, 'connection error:'));
  db.once('open', function () {});
};