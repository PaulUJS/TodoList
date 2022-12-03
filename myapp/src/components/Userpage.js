import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid';

import WorkoutList from './WorkoutList';

const LS_KEY =  'workoutApp.exercise';

export default function Userpage() {

  const days = [
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  return (
    days.map(day => {
      return (
        <>
          <h2>{day}</h2>
          <Day day={day}/>
        </>
      )
    })
  )
}

function Day({ day }) {

  // useRef allows me to keep values through renders
  const exerciseNameRef = useRef();
  const exerciseRepsRef = useRef();
  const exerciseWeightRef = useRef();

  // useState allows use to track the state of the app
  // The state is just data that needs to be tracked like inputs
  // set is setting the state to reflect the state when it's called, basically updating it
  const [isShown, setIsShown] = useState(false);
  const [exercises, setExercises] = useState([]);

  function showAddExercise(e) {
    setIsShown(current => !current);
  };

  async function handleAddExercise(e) {
    const name = exerciseNameRef.current.value;
    const reps = exerciseRepsRef.current.value;
    const weight = exerciseWeightRef.current.value;

    // Sets the state of the exercises relative to the last input
    if (name === '') return
    setExercises(prevExercises => {
      return [...prevExercises, {id: nanoid(), day: JSON.stringify(day), name: name, reps: reps, weight: weight}]
    })

    // Sends a post request to the backend api to add the workout to the db
    const response = await fetch(`/http://localhost:3000/api/user/workout/${JSON.stringify(day)}`,{
      method: post,
      body: JSON.stringify(exercises),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    exerciseNameRef.current.value = null;
    exerciseRepsRef.current.value = null;
    exerciseWeightRef.current.value = null;
  };

  // useEffect allows me to peform side effects in components
  // This includes fetching data, updating dom, etc
  // useEffect accepts 2 arguments, the second is optional
  useEffect(() => {
    const storedExercises = JSON.parse(localStorage.getItem(LS_KEY));

    // Grabs the exercises from the db and displays them on page load
    async function fetchExercises() {
      const response = await fetch(`/http://localhost:3000/api/user/workout/${JSON.stringify(day)}`);
      const json = await response.json();
    };

    if (response.ok) {
      setExercises(json)
    }

    fetchExercises();
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(exercises))
  }, [exercises])

  return (
    <>
      <WorkoutList exercises={exercises}/>
        <button  className='input-toggle' onClick={showAddExercise}>Add Exercise</button>
        {isShown && (
        <form className='exercise-input'>
          <label>Enter exercise name</label>
          <input ref={exerciseNameRef} type='text' required/>

          <label>Enter amount of reps</label>
          <input ref={exerciseRepsRef} type='number' required/>

          <label>Enter exercise weight</label>
          <input ref={exerciseWeightRef} type='number' required/>

          <button type='submit' onClick={handleAddExercise}>Submit Exercise</button>
        </form>
        )}
    </>
  )
}