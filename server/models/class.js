const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
  day: String,
  time: String,
  type: String,
  spotsRemaining: Number,
});

const Class = mongoose.model("Class", classSchema);

//Monday Schedule
let wod530a = new Class({day: "Monday", time: "5:30AM", type:"Crossfit", spotsRemaining: 5})
//wod530a.save();
let wod730aM = new Class({day: "Monday", time: "7:30AM", type:"Crossfit", spotsRemaining: 20})
//wod730aM.save();
let wod9aM = new Class({day: "Monday", time: "9:00AM", type:"Crossfit", spotsRemaining: 20})
//wod9aM.save();
let wod10aM = new Class({day: "Monday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
//wod10aM.save();
let wod430pM = new Class({day: "Monday", time: "4:30PM", type:"Crossfit", spotsRemaining: 20})
//wod430pM.save();
let wod530pM = new Class({day: "Monday", time: "5:30PM", type:"Crossfit", spotsRemaining: 20})
//wod530pM.save();

//Tuesday Schedule
let wod530aTu = new Class({day: "Tuesday", time: "5:30AM", type:"Crossfit", spotsRemaining: 5})
//wod530aTu.save();

let wod730aTu = new Class({day: "Tuesday", time: "7:30AM", type:"Crossfit", spotsRemaining: 20})
////wod730aTu.save();

let wod9aTu = new Class({day: "Tuesday", time: "9:00AM", type:"Crossfit", spotsRemaining: 20})
//wod9aTu.save();

let wod10aTu = new Class({day: "Tuesday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
//wod10aTu.save();

let og11aTu = new Class({day: "Tuesday", time: "11:00AM", type:"Open Gym", spotsRemaining: 20})
//og11aTu.save();

let wod530pTu = new Class({day: "Tuesday", time: "5:30PM", type:"Crossfit", spotsRemaining: 20})
//wod530pTu.save();

let wod630pTu = new Class({day: "Tuesday", time: "6:30PM", type:"Crossfit", spotsRemaining: 20})
//wod630pTu.save();

//Wed Schedule
let wod530aW = new Class({day: "Wednesday", time: "5:30AM", type:"Crossfit", spotsRemaining: 5})
////wod530aW.save();

let wod730aW = new Class({day: "Wednesday", time: "7:30AM", type:"Crossfit", spotsRemaining: 20})
//wod730aW.save();

let wod9aW = new Class({day: "Wednesday", time: "9:00AM", type:"Crossfit", spotsRemaining: 20})
//wod9aW.save();

let wod10aW = new Class({day: "Wednesday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
//wod10aW.save();

let wod430pW = new Class({day: "Wednesday", time: "4:30PM", type:"Crossfit", spotsRemaining: 20})
//wod430pW.save();

let wod530pW = new Class({day: "Wednesday", time: "5:30PM", type:"Crossfit", spotsRemaining: 20})
//wod530pW.save();

//Thurs Schedule
let wod530aTh = new Class({day: "Thursday", time: "5:30AM", type:"Crossfit", spotsRemaining: 5})
////wod530aTh.save();

let wod730aTh = new Class({day: "Thursday", time: "7:30AM", type:"Crossfit", spotsRemaining: 20})
//wod730aTh.save();

let wod9aTh = new Class({day: "Thursday", time: "9:00AM", type:"Crossfit", spotsRemaining: 20})
//wod9aTh.save();

let wod10aTh = new Class({day: "Thursday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
//wod10aTh.save();

let og11aTh = new Class({day: "Thursday", time: "11:00AM", type:"Open Gym", spotsRemaining: 20})
//og11aTh.save();

let wod530pTh = new Class({day: "Thursday", time: "5:30PM", type:"Crossfit", spotsRemaining: 20})
//wod530pTh.save();

let wod630pTh = new Class({day: "Thursday", time: "6:30PM", type:"Crossfit", spotsRemaining: 20})
//wod630pTh.save();

//Friday Schedule
let wod530aF = new Class({day: "Friday", time: "5:30AM", type:"Crossfit", spotsRemaining: 5})
//wod530aF.save();

let wod730aF = new Class({day: "Friday", time: "7:30AM", type:"Crossfit", spotsRemaining: 20})
//wod730aF.save();

let wod9aF = new Class({day: "Friday", time: "9:00AM", type:"Crossfit", spotsRemaining: 20})
//wod9aF.save();

let wod10aF = new Class({day: "Friday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
///wod10aF.save();

let wod530pF = new Class({day: "Friday", time: "5:30PM", type:"Crossfit", spotsRemaining: 20})
////wod530pF.save();

//Sat Schedule
let wod8aSa = new Class({day: "Saturday", time: "8:00AM", type:"Crossfit", spotsRemaining: 20})
//wod8aSa.save();

let og9aSa = new Class({day: "Saturday", time: "9:00AM", type:"Open Gym", spotsRemaining: 20})
//og9aSa.save();

let wod10aSa = new Class({day: "Saturday", time: "10:00AM", type:"Crossfit", spotsRemaining: 20})
//wod10aSa.save();

//Sunday Schedule
let yogaSun = new Class({day: "Sunday", time: "10:00AM", type:"Yoga", spotsRemaining: 20})
//yogaSun.save();

module.exports = mongoose.model('Class', classSchema);