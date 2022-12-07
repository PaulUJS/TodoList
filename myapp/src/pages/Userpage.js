import React, { useState, useEffect, useContext } from 'react';

import { Context } from "../context/WorkoutContext";
import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';
import CollectionForm from '../components/CollectionForm';

export default function Userpage() {

  const [isShown, setIsShown] = useState(false);
  
  function showAddExercise(e) {
    setIsShown(current => !current);
  };

  return (
    <>    
      <div className='day-container'>
        <div className='title-wrapper'>
        <h2>Workout Collections</h2>
        <button className='input-toggle' onClick={showAddExercise}>Display</button>
        </div>
        <CollectionForm/>
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

  // Sets the global context of the workouts when the page first loads
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
  }, []);

  return (
    <>
      <WorkoutList/>
    </>
  )
}