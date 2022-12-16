import React from 'react';

export default function Workout({ workout }) {
  return (
    <div className='collection-container'>
      <h2>{workout.name}</h2>

      <label className='workout-label'>Weight:</label>
      <p>{workout.weight}</p>

      <label className='workout-label'>Exercise Reps:</label>
      <p>{workout.reps}</p>
    </div>
  )
}

