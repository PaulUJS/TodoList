const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// Gets all workouts for the day referenced in the param
router.get('/:day', (req,res) => {
    
})

// Saves the workouts 
router.post('/:day', async (req,res) => {
  const day = req.params['day']
  const {name, weight, reps} = req.body
  const userID = ''

  try {
    const workout = await Workout.create(day, name, weight, reps, userID)
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// Grabs specific workout
router.get('/:day/:id', (req,res) => {
    
})

// Updates a workout
router.put('/:day/:id', (req,res) => {

})

// Deletes a workout
router.delete('/:day/:id', (req,res) => {

})

module.exports = router