const express = require('express');
const mongoose = require ('mongoose');
var port = 5000;


const app = express();

mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'Connection error:'));

const {Schema} = mongoose;
const scheduleSchema = new Schema({
  cinemaTimesId: String,
  movie: String
})
var ScheduleTimes = mongoose.model('schedule', scheduleSchema);

app.get(`/schedule`, async (req, res) => {
  let result = await ScheduleTimes.find();
  console.log(result);
  return res.status(200).send(result);
});

app.listen(5000, () => {
  console.log('Server running on port 5000')
});


// require('./schedule');

// const ScheduleTable = express();

// mongoose.connect('mongodb://localhost:27017/schedule',{useNewUrlParser: true, useUnifiedTopology: true});

// var db = mongoose.connection;
 
// db.on('error', console.error.bind(console, 'Connection error:'));

// app.listen(port);
// console.log('Server listening on port ' + port);
