var mongoose = require('mongoose');
const express = require('express');
 
const app = express();

// make a connection
//mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://localhost:27017/cinema',{useNewUrlParser: true, useUnifiedTopology: true});
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Connection error:'));
 

var ScheduleSchema = mongoose.Schema({
  cinemaTimesId: String,
  movie: String,
  times: [[String]]
});

var OpeningSchema = mongoose.Schema({
  id: Number,
  day: String, 
});

collection = mongoose.model('schedule', ScheduleSchema, 'schedule');
collectionb = mongoose.model('opening', OpeningSchema, 'opening');

app.get(`/opening`, async (req, res) => {
  let result = await collectionb.find();
  console.log(result);
  return res.status(200).send(result);
});


app.get(`/schedule`, async (req, res) => {
  let result = await collection.find();
  console.log(result);
  return res.status(200).send(result);
});


app.listen(5000, () => {
  console.log('Server running on port 5000')
});
