import React, { useState, useRef, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Context } from "../context/WorkoutContext";
import { Context as CollectionContext } from '../context/CollectionContext';

export default function WorkoutForm() {

  // Allows me to access the input fields
  const useNameRef = useRef();
  const useWeightRef = useRef();
  const useRepsRef = useRef();

  // Allows me to set the state and global context of the application for the exercises
  const { exercises, setExercises } = useContext(Context);
  const [workoutState, setWorkoutState] = useState([]);

  const { collection, setCollection } = useContext(CollectionContext);
  const [collectionState, setCollectionState] = useState([]);

  const [error, setError] = useState(null);

  async function sendWorkout(e) {
    e.preventDefault();

    const name = useNameRef.current.value;
    const reps = useWeightRef.current.value;
    const weight = useRepsRef.current.value;

    setCollectionState(collection);
    const group = collection.group;
    const groupID = collection.groupID;

    const workout = {group: group, name: name, weight: weight, reps: reps, groupID: groupID};
    setWorkoutState(workout);

    // Sends a post request to the backend api to add the workout to the db
    const response = fetch('http://localhost:4000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json =  await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      useNameRef.current.value = null;
      useWeightRef.current.value = null;
      useRepsRef.current.value = null;
      setError(null);
    }
  };

  // Everytime the workoutState is changed it updates the global context to match
  useEffect(() => {
    setExercises([workoutState, ...exercises])
  }, [workoutState]);

  return (
    <>
      <form className='collection-form' onSubmit={sendWorkout}>
        <label>Exercise name</label>
        <input ref={useNameRef} type='text' required/>

        <label>Amount of Reps</label>
        <input ref={useWeightRef} type='number' required/>

        <label>Weight(lbs)</label>
        <input ref={useRepsRef} type='number' required/>

        <button type='submit'>Create Workout</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </>
  )
}