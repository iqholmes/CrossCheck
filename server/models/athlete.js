const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

const AthleteSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  firstName: String,
  lastName: String,
  hash: String,
  salt: String
});

AthleteSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');

  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

AthleteSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

  return this.hash === hash;
}

const Athlete = mongoose.model('athlete', AthleteSchema);

module.exports = Athlete;
