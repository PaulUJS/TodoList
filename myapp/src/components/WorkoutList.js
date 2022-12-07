import React, { useContext } from 'react'
import { Context } from "../context/WorkoutContext";

import Workout from './Workout';

export default function WorkoutList() {
  const { exercises, setExercises } = useContext(Context);
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

