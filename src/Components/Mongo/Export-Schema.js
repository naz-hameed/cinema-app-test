var mongoose = require('mongoose');
var collection = require('./schedule')
 
// make a connection
mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    collection.findOne({movie: "The Invisible Man"}, function(error,obj) {console.log(obj);})
});

/*
 * This example is a re-factored version of 02-find-document.  The schema creation has been moved into a separate file - Account.js.
 * But it is used here, which is what the require('./Account') statement does.  This allows the Account schema to be re-used in
 * other JavaScript files.  It's also a cleaner design - Account.js is the model and only the model.  This file, Find-Document.js
 * does the finding, and only the finding.  This means our design is orthogonal.  Each script has only a single responsibility.
 * 
 * nicnei@gmail.com
 */