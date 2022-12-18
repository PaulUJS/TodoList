import React, { useContext, useState, useEffect } from 'react'
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
}

