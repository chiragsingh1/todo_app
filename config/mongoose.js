// rewuire the library
const mongoose = require('mongoose');
// connect to db
mongoose.connect('mongodb://localhost/todo_app_db');
//check if connected
const db = mongoose.connection;
//  if error
db.on('error',console.error.bind(console,'error connecting to db'));
// if connected successfully
db.once('open',function(){
    console.log('DATABASE CONNECTED!');
});
