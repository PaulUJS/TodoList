import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context as SessionContext } from '../context/SessionContext';
import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

function WorkoutPage() {
  const [likes, setLikes] = useState('');
  const { setCollection } = useContext(Context);
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
      }
    }
    fetchWorkouts();
  }, []);

  async function likeButton() {
    console.log(`likes ${likes}`);
  };

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <button type='submit' className='like-button' onClick={likeButton}>
            <img src={process.env.PUBLIC_URL + '/hearticon.png'} />
        </button>
        <WorkoutList likes={likes}/>
        <WorkoutForm id={id} group={group}/>
      </div>
    </>
  )
}

export default WorkoutPage