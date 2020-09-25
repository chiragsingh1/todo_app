const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

// use express router
app.use('/',require('./routes'));

// set ejs view engine
app.set('view engine','ejs');
app.set('views','./views');

// middleware for assets
app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
	}
    console.log(`Server running on port: ${port}`);
});