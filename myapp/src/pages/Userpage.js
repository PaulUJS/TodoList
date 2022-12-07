import React, { useState, useEffect, useContext, useRef } from 'react'

import { Context } from "../context/WorkoutContext";
import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';

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
        <WorkoutForm/>
        {isShown && (
          <div className='day-wrapper'>
          <Day/>
          </div>
        )} 
      </div>
    </>
  )
}

function Day() {
  const { exercises, setExercises } = useContext(Context);

  useEffect(() => {
    async function fetchExercises() {
      // Grabs the workouts from the db and stores them in the json variable
      const response = await fetch(`http://localhost:4000/api/workouts/`);
      const json = await response.json();
  
      if (response.ok) {
        setExercises(json);
      }    
    };
    fetchExercises();
  }, [])
  useEffect(() => {
    setExercises(exercises)
  }, [exercises])
  return (
    <>
      <WorkoutList/>
    </>
  )
}