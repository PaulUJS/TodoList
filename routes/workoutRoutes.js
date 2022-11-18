const express = require('express')

const router = express.Router()

// Gets all workouts for the day referenced in the param
router.get('/:day', (req,res) => {
    
})

// Saves the workouts 
router.post('/:day', (req,res) => {

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