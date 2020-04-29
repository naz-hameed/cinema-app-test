var mongoose = require('mongoose');
 
var ScheduleSchema = mongoose.Schema({
    cinemaTimesId: String,
    movie: String
});
 
module.exports = mongoose.model('schedule', ScheduleSchema, 'schedule');
