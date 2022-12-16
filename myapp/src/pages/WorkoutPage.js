import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

function WorkoutPage() {
  const { collection, setCollection } = useContext(Context);

  useEffect(() => {
    async function fetchWorkouts(e) {
      const response = fetch(`http://localhost:4000/api/collections/${JSON.stringify(collection.groupID)}`);
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
      <div className='user-container'>
        <WorkoutList/>
        <WorkoutForm/>
      </div>
    </>
  )
}

export default WorkoutPage