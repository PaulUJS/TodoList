import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

function WorkoutPage() {
  const { collection, setCollection } = useContext(Context);
  const { group, id } = useParams();

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch(`http://localhost:4000/api/collections/${id}`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
      }
    }
    fetchWorkouts();
  }, []);

  useEffect(() => {
    setCollection(collection);
  }, [collection])

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <button type='submit' className='like-button'>
            <img src={process.env.PUBLIC_URL + '/hearticon.png'} />
        </button>
        <WorkoutList/>
        <WorkoutForm id={id} group={group}/>
      </div>
    </>
  )
}

export default WorkoutPage