import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context as SessionContext } from '../context/SessionContext';
import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import UserNavbar from '../components/UserNavbar';
import LikeButton from '../components/LikeButton';

function WorkoutPage() {
  const { collection, setCollection } = useContext(Context);
  const { group, id } = useParams();
  const { setSession } = useContext(SessionContext);
  useEffect(() => {
    const sessionStorage = localStorage.getItem('session');
    const user = JSON.parse(sessionStorage);
    setSession(user);

    async function fetchWorkouts() {
      const response = await fetch(`http://localhost:4000/api/collections/${id}`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
        localStorage.setItem('likes', JSON.stringify(json));
      }
    }
    fetchWorkouts();
  }, []);

  useEffect(() => {
    collection.map(workouts => {
      if (workouts.workouts != null) {
        setCollection(workouts.workouts);
      }
    })
    console.log(collection)
  }, [collection])

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <LikeButton/>
        <WorkoutList/>
        <WorkoutForm id={id} group={group}/>
      </div>
    </>
  )
}

export default WorkoutPage