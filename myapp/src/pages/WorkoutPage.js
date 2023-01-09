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
  const [isShown, setIsShown] = useState(false)
  const { group, id } = useParams();
  const { setSession } = useContext(SessionContext);
  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);

  useEffect(() => {
    setSession(user);
    async function fetchWorkouts() {
      const response = await fetch(`http://localhost:4000/api/collections/${id}`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
        localStorage.setItem('likes', JSON.stringify(json));
        localStorage.setItem('collection', JSON.stringify(json));
        if (json.userID == JSON.stringify(user._id)) {
          setIsShown(!isShown);
        }
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
  }, [collection])

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <LikeButton/>
        <WorkoutList/>
        {!isShown && <WorkoutForm group={group} id={id}/>}
      </div>
    </>
  )
}

export default WorkoutPage