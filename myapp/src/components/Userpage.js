import React from 'react'

import WorkoutInput from './WorkoutInput';
import Workouts from './Workouts';

export default function Userpage() {

  return (
    <>
      <div className='user-container'>
        <h1>Workout Center</h1>
        <div>
          <h2>Monday</h2>
          <Workouts/>
          <button>Add an exercise</button>
        </div>
      </div>
    </>
  )
}

