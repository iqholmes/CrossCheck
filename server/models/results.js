const mongoose = require('mongoose');
const Workout = require('./workout');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true },
  reps: Number,
  time: Number,
  athlete: String
});

const Result = mongoose.model("Result", resultSchema);

//Cindy
// let cindyResult1 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 450, athlete: "Ian"});
// cindyResult1.save();

// let cindyResult2 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 510, athlete: "Ryan"});
// cindyResult2.save();

// let cindyResult3 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 550, athlete: "Morgan"});
// cindyResult3.save();

// let cindyResult4 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 431, athlete: "Alana"});
// cindyResult4.save();

// let cindyResult5 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 620, athlete: "Natasha"});
// cindyResult5.save();

// // //Fran
// let franResult1 = new Result({workout: "60c7514c6d83476d09afd92d", time: 150, athlete: "Ian"});
// franResult1.save();

// let franResult2 = new Result({workout: "60c7514c6d83476d09afd92d", time: 175, athlete: "Ryan"});
// franResult2.save();

// let franResult3 = new Result({workout: "60c7514c6d83476d09afd92d", time: 296, athlete: "Morgan"});
// franResult3.save();

// let franResult4 = new Result({workout: "60c7514c6d83476d09afd92d", time: 255, athlete: "Alana"});
// franResult4.save();

// let franResult5 = new Result({workout: "60c7514c6d83476d09afd92d", time: 355, athlete: "Natasha"});
// franResult5.save();

// //Murph
// let murphResult1 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: 3599, athlete: "Ian"});
// murphResult1.save();

// let murphResult2 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: 3800, athlete: "Ryan"});
// murphResult2.save();

// let murphResult3 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: 2000, athlete: "Morgan"});
// murphResult3.save();

// let murphResult4 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: 3643, athlete: "Alana"});
// murphResult4.save();

// let murphResult5 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: 3410, athlete: "Natasha"});
// murphResult5.save();

// //Diane
// let dianeResult1 = new Result({workout: "60c75971167c5a6e0cdf9b22", time: 792, athlete: "Ian"})
// dianeResult1.save();

// let dianeResult2 = new Result({workout: "60c75971167c5a6e0cdf9b22", time: 1000, athlete: "Ryan" })
// dianeResult2.save();

// let dianeResult3 = new Result({workout: "60c75971167c5a6e0cdf9b22", time: 720, athlete: "Morgan"})
// dianeResult3.save();

// let dianeResult4 = new Result({workout: "60c75971167c5a6e0cdf9b22", time: 775, athlete: "Alana"})
// dianeResult4.save();

// let dianeResult5 = new Result({workout: "60c75971167c5a6e0cdf9b22", time: 1200, athlete: "Natasha" })
// dianeResult5.save();

// // //Helen
// let helenResult1 = new Result({workout: "60c759a94015876e2b8c024d", time: 781, athlete: "Ian" })
// helenResult1.save();

// let helenResult2 = new Result({workout: "60c759a94015876e2b8c024d", time: 787, athlete: "Ryan" })
// helenResult2.save();

// let helenResult3 = new Result({workout: "60c759a94015876e2b8c024d", time: 720, athlete: "Morgan" })
// helenResult3.save();

// let helenResult4 = new Result({workout: "60c759a94015876e2b8c024d", time: 1020, athlete: "Alana" })
// helenResult4.save();

// let helenResult5 = new Result({workout: "60c759a94015876e2b8c024d", time: 655, athlete: "Natasha" })
// helenResult5.save();

// //Annie
// let annieResult1 = new Result({workout:"60c75a867164e36e4db11fbb", time: 535, athlete: "Ian"})
// annieResult1.save();

// let annieResult2 = new Result({workout:"60c75a867164e36e4db11fbb", time:540, athlete: "Ryan"})
// annieResult2.save();

// let annieResult3 = new Result({workout:"60c75a867164e36e4db11fbb", time: 512, athlete: "Morgan"})
// annieResult3.save();

// let annieResult4 = new Result({workout:"60c75a867164e36e4db11fbb", time: 600, athlete: "Alana"})
// annieResult4.save();

// let annieResult5 = new Result({workout:"60c75a867164e36e4db11fbb", time:529, athlete: "Natasha"})
// annieResult5.save();

// //Chief Running Bull
// let bullResult1 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 230, athlete: "Ian"})
// bullResult1.save();

// let bullResult2 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 234, athlete: "Ryan"})
// bullResult2.save();

// let bullResult3 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 180, athlete: "Morgan"})
// bullResult3.save();

// let bullResult4 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 175, athlete: "Alana"})
// bullResult4.save();

// let bullResult5 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 250, athlete: "Natasha"})
// bullResult5.save();

module.exports = mongoose.model('Result', resultSchema);
