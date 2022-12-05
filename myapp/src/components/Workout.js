import React from 'react'

export default function Workout({ workout }) {
  return (
    <div className='workout-wrapper'>
      <h2>{workout.name}</h2>
      <div className='info-wrapper'>
        <label className='workout-label'>Weight:</label>
        <p>{workout.weight}</p>
      </div>
      
      <div className='info-wrapper'>
        <label className='workout-label'>Exercise Reps:</label>
        <p>{workout.reps}</p>
      </div>
    </div>
  )
}

