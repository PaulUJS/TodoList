import React from 'react';

export default function Workout({ name, weight, reps }) {
  return (
    <div className='collection-container'>
      <h2>{name}</h2>

      <label className='workout-label'>Weight:</label>
      <p>{weight}</p>

      <label className='workout-label'>Exercise Reps:</label>
      <p>{reps}</p>
    </div>
  )
}

