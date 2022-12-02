import React, { useState, useRef, useEffect } from 'react'

import { nanoid } from 'nanoid';
import NumericInput from 'react-numeric-input';

import Workout from './Workout';
import WorkoutList from './WorkoutList';

const LS_KEY =  'workoutApp.exercise';

export default function Userpage() {
  const exerciseNameRef = useRef();
  const exerciseRepsRef = useRef();
  const exerciseWeightRef = useRef();

  const [exercises, setExercises] = useState([]);

  function handleAddExercise(e) {
    const name = exerciseNameRef.current.value;
    const reps = exerciseRepsRef.current.value;
    const weight = exerciseWeightRef.current.value;

    if (name === '') return
    setExercises(prevExercises => {
      return [...prevExercises, {id: nanoid(), name: name, reps: reps, weight: weight}]
    })

    exerciseNameRef.current.value = null;
    exerciseRepsRef.current.value = null;
    exerciseWeightRef.current.value = null;
  };

  useEffect(() => {
    const storedExercises = JSON.parse(localStorage.getItem(LS_KEY));
    if (storedExercises) {
      setExercises(storedExercises)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(exercises))
  }, [exercises])

  return (
    <>
      <div className='user-container'>
        <div>
            <WorkoutList exercises={exercises}/>
            <label>Enter exercise name</label>
            <input ref={exerciseNameRef} type='text' required/>

            <label>Enter amount of reps</label>
            <input ref={exerciseRepsRef} required/>

            <label>Enter exercise weight</label>
            <input ref={exerciseWeightRef} required/>

            <button type='submit' onClick={handleAddExercise}>Create Exercise</button>

        </div>
      </div>
    </>
  )
}

