const express = require('express');
const Workout = require('../models/workoutModel');
const {
  getCollection,
  deleteCollection,
  getUserCollections,
  addLike,
  createCollection,
  createWorkout
} = require('../controllers/CollectionController');

const router = express.Router();

router.post('/newcollection', createCollection);

router.put('/newworkout', createWorkout);

router.get('/user/:userID', getUserCollections);

router.get('/:groupID', getCollection);

router.post('/newlike', addLike);

router.delete('/:groupID', deleteCollection);

module.exports = router;