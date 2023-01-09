import React, { useState, useEffect } from 'react';
import Edit from './Edit';
import Delete from './Delete';

export default function Workout({ workout }) {
  const [isShown, setIsShown] = useState(false)
  const [workouts, setWorkouts] = useState([]);
  const user = JSON.parse(localStorage.getItem('session'));
  const collection = JSON.parse(localStorage.getItem('collection'));

  useEffect(() => {
    return setWorkouts(workout);
  }, [])
  
  return (
    <>
      <div className='workout-container'>
        <h2>{workout.name}</h2>
        <label className='workout-label'>Weight: {workout.weight} (lbs)</label>
        <label className='workout-label'>Exercise Reps: {workout.reps}</label>
        <label className='workout-label'>Exercise Sets: {workout.sets}</label>
        <div className='workout-btns'>
          <Delete workouts={workout.workoutID}/>
          <button className='edit-button'  onClick={() => setIsShown(!isShown)}>Edit</button>
        </div>
      </div>
      {isShown && <Edit workouts={workouts}/>}
    </>
  )
}

