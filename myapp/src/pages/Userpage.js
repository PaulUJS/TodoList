import React, { useState, useEffect } from 'react'

import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';

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


  // set is setting the state to reflect the state when it's called, basically updating it
  const [isShown, setIsShown] = useState(false);
  const [exercises, setExercises] = useState([]);

  // Updates the isShown state to make the div associated toggle 
  function showAddExercise(e) {
    setIsShown(current => !current);
  };
  
  // Grabs the exercises from the db and displays them on page load
  async function fetchExercises() {
    // Grabs the workouts from the db and stores them in the json variable
    const response = await fetch(`http://localhost:4000/api/workouts/`);
    const json = await response.json();

    if (response.ok) {
      setExercises(json);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [])

  useEffect(() => {
    fetchExercises();
    localStorage.setItem(LS_KEY, JSON.stringify(exercises))
  }, [exercises])

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