const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: String,
  length: String,
  movement1: String,
  repCount1: String,
  movement2: String,
  repCount2: String,
  movement3: String,
  repCount3: String,
  movement4: String,
  repCount4: String,
  movement5: String,
  repCount5: String,
  weight: String,
  results: [{ type: Schema.Types.ObjectId, ref: 'Result' }],
  type: String
});

const Workout = mongoose.model("Workout", workoutSchema);

let fran = new Workout({name: "Fran", length: "8 min cap", repCount1:"21-15-9", movement1: "Thrusters", movement2: "Pull ups", weight:"95/65", results: ["60c7831c2ae6f67482d93899", "60c7831c2ae6f67482d93898", "60c7831c2ae6f67482d9389a", "60c7831c2ae6f67482d9389b", "60c7831c2ae6f67482d9389c"], type:"time"})
////fran.save();
let murph = new Workout({name: "Murph", movement1:"Run 1 Mile", movement2: "100 Pull ups", movement3: "200 Push ups", movement4: "300 Air Squats", movement5:"Run 1 Mile", type:"time"})
//murph.save();
let diane = new Workout({name: "Diane", length: "15 min cap", repCount1:"21-15-9", movement1: "Deadlifts", movement2: "HSPU", weight:"225/155", type: "time"})
////diane.save();
let cindy = new Workout({name: "Cindy", length: "20 minute AMRAP", repCount1:"5-10-15", movement1: "Pull ups", movement2: "Push ups", movement3:"Air squats", type: "reps"})
//cindy.save();
let helen = new Workout({name: "Helen", length: "3 rounds for time", movement1: "400m run", movement2: "21 Kettlebell Swings", movement3:"12 pull ups", weight:"53/35", type: "time"})
//helen.save();
let annie = new Workout({name: "Annie", length: "10 minute cap", repCount1: "50-40-30-20-10", movement1: "Double Unders", movement2: "Sit ups", type: "time"})
//annie.save();
let wod61421 = new Workout({name: "Chief Running Bull", length: "5 rounds - 5:00 AMRAP 1:00 Rest", movement1: "400m Run", movement2: "3 Power Cleans", movement3: "6 Push Ups", movement4: "9 Air Squats", weight: "135/95", type:"reps"})
//wod61421.save();

module.exports = mongoose.model('Workout', workoutSchema);