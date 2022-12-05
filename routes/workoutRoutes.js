const express = require('express');
const Workout = require('../models/workoutModel');

const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  deleteAll
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.post('/', createWorkout);

router.put('/:id', updateWorkout);

router.delete('/:id', deleteWorkout);

router.get('/:id',getSingleWorkout);

router.delete('/', deleteAll);

module.exports = router;