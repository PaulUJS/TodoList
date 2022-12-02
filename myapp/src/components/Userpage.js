import React, { useState, useRef } from 'react'

import WorkoutInput from './WorkoutInput';
import WorkoutList from './WorkoutList';

export default function Userpage() {
  const [exercises, setExercises] = useState([]);


  function handleAddExercise(e) {
    
  };

  return (
    <>
      <div className='user-container'>
        <h1>Workout Center</h1>
        <div>
          <h2>Monday</h2>
          <WorkoutList exercise={exercises}/>
          <button>Add an exercise</button>
        </div>
      </div>
    </>
  )
}

