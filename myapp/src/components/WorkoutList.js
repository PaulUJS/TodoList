import React, { useContext } from 'react'
import { Context } from "../context/CollectionContext";

import Workout from './Workout';

export default function WorkoutList() {
  const { collection, setCollection } = useContext(Context);
  return (
    collection.map(workout => {
      if (workout.name) {
        return (
          <>
            <Workout key={workout.id} workout={workout}/>
          </>
        )
      }
    })
  )
}

