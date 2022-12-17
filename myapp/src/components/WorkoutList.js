import React, { useContext } from 'react'
import { Context } from "../context/CollectionContext";

import Workout from './Workout';

export default function WorkoutList() {
  const { collection, setCollection } = useContext(Context);
  if (collection.length === 0) {
    return (
      <div>No Workouts in this colletion yet</div>
    )
  } else {
    return (
      collection.map(workout => {
        if (workout.name != null) {
          return (
            <>
              <Workout key={workout.id} name={workout.name} weight={workout.weight} reps={workout.reps}/>
            </>
          )
        }
      })
    )
  }
}

