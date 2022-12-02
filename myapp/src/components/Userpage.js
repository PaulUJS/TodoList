import React, { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid';

import WorkoutList from './WorkoutList';

const LS_KEY =  'workoutApp.exercise';

export default function Userpage() {
  return (
    <>
    <div className='user-container'>


        <div className='day-wrapper'>
          <h2>Monday</h2>
          <Day/>
        </div>
        <div className='day-wrapper'>
          <h2>Tuesday</h2>
          <Day/>
        </div>
        <div className='day-wrapper'>
          <h2>Wednesday</h2>
          <Day/>
        </div>    
        <div className='day-wrapper'>
          <h2>Thursday</h2>
          <Day/>
        </div>    
        <div className='day-wrapper'>
          <h2>Friday</h2>
          <Day/>
        </div>    
        <div className='day-wrapper'>
          <h2>Saturday</h2>
          <Day/>
        </div>    
        <div className='day-wrapper'>
          <h2>Sunday</h2>
          <Day/>
        </div>    

    </div>      
    </>
  )
}

function Day() {
  const exerciseNameRef = useRef();
  const exerciseRepsRef = useRef();
  const exerciseWeightRef = useRef();

  const [isShown, setIsShown] = useState(false);
  const [exercises, setExercises] = useState([]);

  function showAddExercise(e) {
    setIsShown(current => !current);
  };

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
      <WorkoutList exercises={exercises}/>
        <button  className='input-toggle' onClick={showAddExercise}>Add Exercise</button>
        {isShown && (
        <div className='exercise-input'>
          <label>Enter exercise name</label>
          <input ref={exerciseNameRef} type='text' required/>

          <label>Enter amount of reps</label>
          <input ref={exerciseRepsRef} type='number' required/>

          <label>Enter exercise weight</label>
          <input ref={exerciseWeightRef} type='number' required/>

          <button type='submit' onClick={handleAddExercise}>Submit Exercise</button>
        </div>
        )}
    </>
  )
}