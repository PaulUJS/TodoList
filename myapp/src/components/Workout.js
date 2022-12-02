import React from 'react'

export default function Workout({ workout }) {
  return (
    <div>
      <label>Exercise name</label>
      <p>{workout.name}</p>
      <label>Exercise Weight</label>
      <p>{workout.weight}</p>
      <label>Exercise Reps</label>
      <p>{workout.reps}</p>
    </div>
  )
}

