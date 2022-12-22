const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Create and save workout
async function createCollection(req,res) {
  const {group, type, groupID, userID, username, likes} = req.body;

  // adds workout to db
  try {
    const workout = await Workout.create({group, type, groupID, userID, username, likes});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Update workout
async function createWorkout(req,res) {
  const { workouts, groupID } = req.body;

  // updates the workout with the matching ID with the req.body object
  const workout = await Workout.findOneAndUpdate({groupID: groupID}, {
    $push: {workouts: workouts}
  });

  if (!workout) {
    return res.status(404).json({error: 'Cannot find this workout'});
  }

  res.status(200).json(workout);
};

async function getUserCollections(req,res) {
  const { userID } = req.params;
  const collection = await Workout.find({userID: userID}).sort({createdAt: -1});
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

async function addLike(req,res) {
  const { groupID, likes } = req.body;
  
  const collection = await Workout.findOneAndUpdate({groupID: groupID}, {
    likes: likes
  });
  return res.status(200).json(collection);
}

module.exports = {
  getCollection,
  deleteCollection,
  getUserCollections,
  addLike,
  createWorkout,
  createCollection
}