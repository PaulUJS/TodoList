const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');
// Create table

// Gets all workouts
async function getWorkouts(req,res) {
  const workouts = await Workout.find().sort({createdAt: -1});  

  res.status(200).json(workouts);
};

async function getSingleWorkout(req,res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no workout found'});
  } else {
    const workouts = await Workout.findById(id);
    if (!workouts) {
      return res.status(404).json({error: 'Cannot find this workout'});
    }

    // If workout is found it sends the workout to the browser
    res.status(200).json(workouts);
  }
};

// Create and save workout
async function createWorkout(req,res) {
  const {name, group, weight, reps} = req.body;
  const userID = '';

  // adds workout to db
  try {
    const workout = await Workout.create({group, name, weight, reps});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Update workout
async function updateWorkout(req,res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no workout found'});
  }

  // updates the workout with the matching ID with the req.body object
  const workouts = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!workouts) {
    return res.status(404).json({error: 'Cannot find this workout'});
  }

  res.status(200).json(workouts);
};

// Delete workout
async function deleteWorkout(req,res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no workout found'});
  }
  
  // In mongodb id is referenced as _id
  const workouts = await Workout.findOneAndDelete({_id: id});

  if (!workouts) {
    return res.status(404).json({error: 'Cannot find this workout'});
  }

  res.status(200).json(workouts);
};

async function deleteAll(req,res) {
  const workouts = await Workout.deleteMany();
};

module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  deleteAll
}