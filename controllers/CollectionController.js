const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

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

module.exports = {
  getCollection,
  deleteCollection,
  getUserCollections
}