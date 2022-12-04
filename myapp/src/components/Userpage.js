import React, { useState, useEffect } from 'react'
import WorkoutList from './WorkoutList';
import WorkoutForm from './WorkoutForm';

const LS_KEY =  'workoutApp.exercise';

export default function Userpage() {

  const [isShown, setIsShown] = useState(false);

  function showAddExercise(e) {
    setIsShown(current => !current);
  };

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
    <>    
      <div className='day-container'>
        <div className='title-wrapper'>
          <h2>Monday</h2>
          <button className='input-toggle' onClick={showAddExercise}>Display</button>
        </div>
        {isShown && (
          <div className='day-wrapper'>
          <Day day='Monday'/>
          </div>
        )} 
      </div>
      
    </>
  )
}

function Day({ day }) {

  // useState allows use to track the state of the app
  // The state is just data that needs to be tracked like inputs
  // set is setting the state to reflect the state when it's called, basically updating it
  const [isShown, setIsShown] = useState(false);
  const [exercises, setExercises] = useState([]);
  
  function showAddExercise(e) {
    setIsShown(current => !current);
  };
  
  // useEffect allows me to peform side effects in components
  // This includes fetching data, updating dom, etc
  // useEffect accepts 2 arguments, the second is optional
  useEffect(() => {

    // Grabs the exercises from the db and displays them on page load
    async function fetchExercises() {
      const response = await fetch(`http://localhost:4000/api/workouts/`);
      const json = await response.json();
      if (response.ok) {
        setExercises(json)
      }
    };

    fetchExercises();
  }, [])

  
  return (
    <>
      <WorkoutList exercises={exercises}/>
        <button  className='input-toggle' onClick={showAddExercise}>Add Exercise</button>
        {isShown && (
          <WorkoutForm day={day}/>
        )}
    </>
  )
}