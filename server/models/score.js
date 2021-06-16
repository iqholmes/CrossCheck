const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true },
  reps: String,
  time: String,
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = mongoose.model('Score', scoreSchema);
