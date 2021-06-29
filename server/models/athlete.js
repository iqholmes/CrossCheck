const mongoose = require('mongoose');
//const Class = require('./class');

const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  firstName: String,
  lastName: String,
});

const Athlete = mongoose.model("Athlete", athleteSchema);

let athlete1 = new Athlete({firstName: 'Ian', lastName: 'Holmes'});
//athlete1.save();

let athlete2 = new Athlete({firstName: 'Brian', lastName: 'Holmes'});
//athlete2.save();

let athlete3 = new Athlete({firstName: 'Edward', lastName: 'Holmes'});
//athlete3.save();

module.exports = mongoose.model('Athlete', athleteSchema);
