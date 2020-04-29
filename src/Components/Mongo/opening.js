var mongoose = require('mongoose');
 
var OpeningSchema = mongoose.Schema({
    id: Number,
    day: String,
    times: String   
});
 
module.exports = mongoose.model('opening', OpeningSchema, 'opening');