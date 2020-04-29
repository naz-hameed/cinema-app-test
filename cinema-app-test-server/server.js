var mongoose = require('mongoose');
const express = require('express');
 
const app = express();

// make a connection
mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Connection error:'));
 

var ScheduleSchema = mongoose.Schema({
  cinemaTimesId: String,
  movie: String,
  times: [String]
});

collection = mongoose.model('schedule', ScheduleSchema, 'schedule');


app.get(`/schedule`, async (req, res) => {
  let result = await collection.find();
  console.log(result);
  return res.status(200).send(result);
});
app.listen(5000, () => {
  console.log('Server running on port 5000')
});
