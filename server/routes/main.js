const router = require("express").Router();
const Result = require('../models/results');
const Class = require('../models/class');
const Workout = require('../models/workout');
const express = require('express');
const cors = require('cors');
const app = express();
const { getDay} = require('../utils');
app.use(cors());

router.param('id', (req, res, next, id) => {
  Workout.findById(id)
    .populate('workouts')
    .exec((err, workout) => {
      if (err) {
        return res.status(404).send('No Workout with that ID found!');
      }
      req.workout = workout;
      next();
    });
});

//returns all workouts
router.get("/workouts", (req, res) => {
  Workout.find((error, workout) => {
    res.send(workout);
  });
});

// Returns the specific workout matching the id provided
router.get("/workouts/:id", (req, res) => {
  res.send(req.workout);
});

//get all results for workout
router.get("/workouts/:id/results", (req, res) => {
  const results = req.workout.results;
  res.send(results)
});

router.post("/workouts/:id/results", (req, res) => {
  const newResult = new Result(req.body);
  newResult.reps = req.body.reps;
  newResult.time = req.body.time;
  newResult.workout = req.workout;
  newResult.save();
  req.workout.results.push(newResult);
  req.workout.save();
  res.send('Result added!');
})

//returns weekly schedule
router.get("/classes", (req, res) => {
  const day = getDay();
  Class.find({day}, (error, classes) => {
    res.send(classes);
  });
});

//return todays workout
router.get('/postscores', (req, res) => {
  const day = getDay();
  Workout.findOne({day}).populate({path: 'results'}).exec((error, workout) => {
    res.send(workout);
  });
})

//returns results
router.get("/results", (req, res) => {
  Result.find((error, results) => {
    res.send(results);
  });
});

module.exports = router;