import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

function WorkoutPage() {
  const { collection, setCollection } = useContext(Context);

  const { group, id } = useParams();

  useEffect(() => {
    async function fetchWorkouts(e) {
      const response = fetch(`http://localhost:4000/api/collections/${id}`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
      }
    }
    fetchWorkouts();
  }, []);

  useEffect(() => {
    setCollection([collection]);
  }, [collection]);

  return (
    <>
      <UserNavbar/>
      <h2>{id}</h2>
      <h3>{group}</h3>
      <div className='user-container'>
        <WorkoutList/>
        <WorkoutForm workoutID={id} group={group}/>
      </div>
    </>
  )
}

export default WorkoutPage