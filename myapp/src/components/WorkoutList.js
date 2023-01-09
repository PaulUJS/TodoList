import React, { useContext, useEffect } from 'react'
import { Context } from "../context/CollectionContext";

import Workout from './Workout';

export default function WorkoutList() {
  const { collection, setCollection } = useContext(Context);
  return (
    collection.map(exercises => {
      return (
          <Workout key={exercises._id} workout={exercises} />
      )
    })
  )
}
