const express = require('express');
const Workout = require('../models/workoutModel');
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');
const router = express.Router()

router.get('/', getWorkouts)

router.post('/', createWorkout)

// Updates a workout
router.put('/:id', updateWorkout)

// Deletes a workout
router.delete('/:id', deleteWorkout)

router.get('/:id',getSingleWorkout)



module.exports = router