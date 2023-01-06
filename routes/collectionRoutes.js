const express = require('express');
const Workout = require('../models/workoutModel');
const {
  getCollection,
  deleteCollection,
  getUserCollections,
  addLike,
  createCollection,
  createWorkout,
  removeLike,
  getCollectionByType,
  editWorkout,
  deleteWorkout
} = require('../controllers/CollectionController');

const router = express.Router();

router.post('/newcollection', createCollection);

router.put('/newworkout', createWorkout);

router.get('/user/:userID', getUserCollections);

router.get('/:groupID', getCollection);

router.get('/typesearch/:type', getCollectionByType);

router.put('/newlike', addLike);

router.put('/removelike', removeLike);

router.put('/editworkout', editWorkout);

router.delete('/deleteworkout/:workoutID', deleteWorkout);

router.delete('/:groupID', deleteCollection);

module.exports = router;