const mongoose = require('mongoose');

// Creates schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    group: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    workouts: {
        type: Array,
        required: false
    },
    groupID: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    likedBy: {
        type: Array,
        required: false
    }
}, { timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);