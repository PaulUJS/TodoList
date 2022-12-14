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

async function getUserCollections(req,res) {
  const collection = await Workout.find().sort({createdAt: -1});
  return res.status(200).json(collection);
}

async function getCollection(req,res) {
  const { groupID, type } = req.params;

  if (groupID && type) {
    const collection = await Workout.find({groupID: groupID, type: type}).sort({createdAt: -1});
    return res.status(200).json(collection);
  }
  if (groupID && !type) {
    const collection = await Workout.find({groupID: groupID}).sort({createdAt: -1});
    return res.status(200).json(collection);
  }
  if (type && !groupID) {
    const collection = Workout.find({type: type}).sort({createdAt: -1});
    res.send(200).json(collection);
  }
  else {
    return res.status(404).json({error: 'Cannot find this collection'});
  }
}

async function deleteCollection(req,res) {
  const { groupID } = req.params;

  try {
    const collection = await Workout.deleteMany({groupID: groupID});
    return res.status(200).json(collection);
  } catch (error) {
    return res.send(404).json({error: 'cannot access this collection'})
  }
}

// Create and save workout
async function createWorkout(req,res) {
  const {group, type, name, weight, reps, groupID} = req.body;
  const userID = '';

  // adds workout to db
  try {
    const workout = await Workout.create({group, type, name, weight, reps, groupID});
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
  deleteAll,
  getCollection,
  deleteCollection,
  getUserCollections
}