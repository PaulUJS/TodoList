import React, { useState, useRef } from 'react'

import NumericInput from 'react-numeric-input';
import { nanoid } from 'nanoid';
  
export default function WorkoutInput() {
  const exerciseNameRef = useRef();
  const [exercises, setExercises] = useState([]);

  function handleAddExercise(e) {
    const name = exerciseNameRef.current.value;

    if (name === '') return
    setExercises(prevExercises => {
      return [...prevExercises, {}]
    })
    exerciseNameRef.current.value = null;
  };

  return (
    <>
      <div>
        <form>
          <label>Enter exercise name</label>
          <input ref={exerciseNameRef} type='text' />

          <label>Enter amount of reps</label>
          <NumericInput/>

          <label>Enter exercise weight</label>
          <NumericInput/>

          <button onClick={handleAddExercise}>Create Exercise</button>
        </form>
        
      </div>
    </>
  )
}

