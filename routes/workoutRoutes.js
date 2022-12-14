const express = require('express');
const Workout = require('../models/workoutModel');

const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  deleteAll,
  getCollection,
  deleteCollection
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.post('/', createWorkout);

router.put('/:id', updateWorkout);

router.delete('/:id', deleteWorkout);

router.get('/:id', getSingleWorkout);

router.get('/collection/:groupID', getCollection);

router.delete('/collection/:groupID', deleteCollection);

router.delete('/', deleteAll);

module.exports = router;