import React from 'react'

import Workout from './Workout';

export default function WorkoutList({ exercises }) {
  return (
    exercises.map(workout => {
      return (
        <>
          <Workout key={workout.id} workout={workout}/>
        </>
      )
    })
  )
}

