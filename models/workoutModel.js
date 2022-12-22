const mongoose = require('mongoose');

// Creates schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    group: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    userID: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    groupID: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    }
}, { timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);