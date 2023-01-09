import React, { useState, useRef, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Context as CollectionContext } from '../context/CollectionContext';

export default function WorkoutForm({ group, id }) {

  // Allows me to access the input fields
  const useNameRef = useRef();
  const useWeightRef = useRef();
  const useRepsRef = useRef();
  const useSetsRef = useRef();

  const { collection, setCollection } = useContext(CollectionContext);
  const [collectionState, setCollectionState] = useState([]);

  async function sendWorkout(e) {
    e.preventDefault();
    
    const name = useNameRef.current.value;
    const reps = useWeightRef.current.value;
    const weight = useRepsRef.current.value;
    const sets = useSetsRef.current.value;
    const workout = {name: name, weight: weight, reps: reps, sets: sets, workoutID: nanoid()}
    const workoutFetch = {workouts: workout, groupID: id};

    // Sends a post request to the backend api to add the workout to the db
    const response = await fetch('http://localhost:4000/api/collections/newworkout', {
      method: 'PUT',
      body: JSON.stringify(workoutFetch),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (response.ok) {
      setCollectionState(workout);
    }
  };

  // Everytime the workoutState is changed it updates the global context to match
  useEffect(() => {
    setCollection([...collection, collectionState]);
  }, [collectionState]);

  return (
    <>
      <form className='collection-form' onSubmit={sendWorkout}>
        <label>Exercise name</label>
        <input ref={useNameRef} type='text' required/>

        <label>Amount of Reps</label>
        <input ref={useWeightRef} type='number' required/>

        <label>Weight(lbs)</label>
        <input ref={useRepsRef} type='number' required/>

        <label>Amount of Sets</label>
        <input ref={useSetsRef} type='number' required/>

        <button type='submit'>Create Workout</button>
      </form>
    </>
  )
}

