import React from 'react'

export default function Workout({ workout }) {
  return (
    <div>
      <label>
      {workout.name}
      </label>
      {workout.weight}
      {workout.reps}
    </div>
  )
}

