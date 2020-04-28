var mongoose = require('mongoose');
 
var ScheduleSchema = mongoose.Schema({
    id: Number,
    movie: String,
    times: [String]   
});
 
module.exports = mongoose.model('schedule', ScheduleSchema, 'schedule');
