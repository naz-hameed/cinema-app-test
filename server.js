var express = require('express');
const mongoose = require ('mongoose');
var port = 4000;

require('./schedule');

const app = express();

mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Connection error:'));

app.listen(port);
console.log('Server listening on port ' + port);
