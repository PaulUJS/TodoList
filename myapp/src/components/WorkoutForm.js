import React, { useState, useRef, useContext } from 'react'
import { nanoid } from 'nanoid';

import { Context } from "../context/WorkoutContext";

export default function WorkoutForm() {

  const useDayRef = useRef();
  const useNameRef = useRef();
  const useWeightRef = useRef();
  const useRepsRef = useRef();
  const [exercises, setExercises] = useContext(Context);
  const [error, setError] = useState(null);

  async function sendWorkout(e) {
    e.preventDefault();

    const day = useDayRef.current.value;
    const name = useNameRef.current.value;
    const reps = useWeightRef.current.value;
    const weight = useRepsRef.current.value;

    const workout = {id: nanoid(), day: day, name: name, weight: weight, reps: reps};

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
      console.log('error');
    }
    if (response.ok) {
      setExercises(prevExercises => {
        return [...prevExercises, json]
      })
      useDayRef.current.value = null;
      useNameRef.current.value = null;
      useWeightRef.current.value = null;
      useRepsRef.current.value = null;
      setError(null);
      console.log('new workout added', json);
    }
  }

  return (
    <>
      <form className='exercise-input' onSubmit={sendWorkout}>
        <label>Day</label>
        <input ref={useDayRef} type='text' required></input>

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