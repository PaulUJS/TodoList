const mongoose = require('mongoose')

// Creates schema
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    userID: {
        type: Number,
        required: true
    }

}, { timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)