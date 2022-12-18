import React from 'react';

export default function Workout({ workout }) {
  return (
    <>
      <div className='workout-container'>
        <h2>{workout.name}</h2>
        <label className='workout-label'>Weight: {workout.weight} (lbs)</label>
        <label className='workout-label'>Exercise Reps: {workout.reps}</label>
      </div>
    </>
  )
}

