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
  getCollectionByType
} = require('../controllers/CollectionController');

const router = express.Router();

router.post('/newcollection', createCollection);

router.put('/newworkout', createWorkout);

router.get('/user/:userID', getUserCollections);

router.get('/:groupID', getCollection);

router.get('/typesearch', getCollectionByType);

router.put('/newlike', addLike);

router.put('/removelike', removeLike);

router.delete('/:groupID', deleteCollection);

module.exports = router;