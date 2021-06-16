const mongoose = require('mongoose');
const Workout = require('./workout');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  workout: { type: Schema.Types.ObjectId, ref: 'Workout', required: true },
  reps: Number,
  time: String,
});

const Result = mongoose.model("Result", resultSchema);
//Cindy
// let cindyResult1 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 450});
// //cindyResult1.save();

// let cindyResult2 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 510});
// cindyResult2.save();

// let cindyResult3 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 550});
// cindyResult3.save();

// let cindyResult4 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 431});
// cindyResult4.save();

// let cindyResult5 = new Result({workout: "60c75971167c5a6e0cdf9b23", reps: 620});
// cindyResult5.save();

// //Fran
// let franResult1 = new Result({workout: "60c7514c6d83476d09afd92d", time: "5:34"});
// franResult1.save();

// let franResult2 = new Result({workout: "60c7514c6d83476d09afd92d", time: "3:14"});
// franResult2.save();

// let franResult3 = new Result({workout: "60c7514c6d83476d09afd92d", time: "7:16"});
// franResult3.save();

// let franResult4 = new Result({workout: "60c7514c6d83476d09afd92d", time: "4:33"});
// franResult4.save();

// let franResult5 = new Result({workout: "60c7514c6d83476d09afd92d", time: "4:45"});
// franResult5.save();

// //Murph
// let murphResult1 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: "59:59"});
// murphResult1.save();

// let murphResult2 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: "55:12"});
// murphResult2.save();

// let murphResult3 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: "34:38"});
// murphResult3.save();

// let murphResult4 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: "1:02:33"});
// murphResult4.save();

// let murphResult5 = new Result({workout: "60c75971167c5a6e0cdf9b21", time: "58:12"});
// murphResult5.save();

// //Diane
// let dianeResult1 = new Result({workout: "60c75971167c5a6e0cdf9b22", time:"13:12"})
// dianeResult1.save();

// let dianeResult2 = new Result({workout: "60c75971167c5a6e0cdf9b22", time:"9:00"})
// dianeResult2.save();

// let dianeResult3 = new Result({workout: "60c75971167c5a6e0cdf9b22", time:"12:42"})
// dianeResult3.save();

// let dianeResult4 = new Result({workout: "60c75971167c5a6e0cdf9b22", time:"14:59"})
// dianeResult4.save();

// let dianeResult5 = new Result({workout: "60c75971167c5a6e0cdf9b22", time:"11:02"})
// dianeResult5.save();
// //Helen
// let helenResult1 = new Result({workout: "60c759a94015876e2b8c024d", time: "13:01" })
// helenResult1.save();

// let helenResult2 = new Result({workout: "60c759a94015876e2b8c024d", time: "13:06" })
// helenResult2.save();

// let helenResult3 = new Result({workout: "60c759a94015876e2b8c024d", time: "12:11" })
// helenResult3.save();

// let helenResult4 = new Result({workout: "60c759a94015876e2b8c024d", time: "17:46" })
// helenResult4.save();

// let helenResult5 = new Result({workout: "60c759a94015876e2b8c024d", time: "10:55" })
// helenResult5.save();
// //Annie
// let annieResult1 = new Result({workout:"60c75a867164e36e4db11fbb", time:"8:55"})
// annieResult1.save();

// let annieResult2 = new Result({workout:"60c75a867164e36e4db11fbb", time:"9:40"})
// annieResult2.save();

// let annieResult3 = new Result({workout:"60c75a867164e36e4db11fbb", time:"9:55"})
// annieResult3.save();

// let annieResult4 = new Result({workout:"60c75a867164e36e4db11fbb", time:"9:15"})
// annieResult4.save();

// let annieResult5 = new Result({workout:"60c75a867164e36e4db11fbb", time:"9:25"})
// annieResult5.save();

// //Chief Running Bull
// let bullResult1 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 230
// })
// bullResult1.save();

// let bullResult2 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 234
// })
// bullResult2.save();

// let bullResult3 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 180
// })
// bullResult3.save();

// let bullResult4 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 175
// })
// bullResult4.save();

// let bullResult5 = new Result ({workout:"60c75aa57037616e62ddf000", reps: 250
// })
// bullResult5.save();

module.exports = mongoose.model('Result', resultSchema);
