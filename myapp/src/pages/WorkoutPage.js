import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Context as SessionContext } from '../context/SessionContext';
import { Context } from '../context/CollectionContext';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

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
  }, [collection])

  async function likeButton() {
    const sessionStorage = localStorage.getItem('session');
    const user = JSON.parse(sessionStorage);
    let likes = JSON.parse(localStorage.getItem('likes'));
    
    if (likes[0].likedBy.length == 0) {
      likes[0].likes += 1;
      likes[0].likedBy = [user._id];
      localStorage.setItem('likes', JSON.stringify(likes));
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};

      const response = await fetch(`http://localhost:4000/api/collections/newlike`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      for (let x in likes[0].likedBy) {
        console.log('for loop')
        if (x = user._id) {
          likes[0].likes -= 1;
          likes[0].likedBy = [];
          localStorage.setItem('likes', JSON.stringify(likes));
          const body = {groupID: id, likes: likes[0].likes, userID: user._id};
  
          const response = await fetch(`http://localhost:4000/api/collections/removelike`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        } 
  
        if (x != user._id) {
          likes[0].likes += 1;
          likes[0].likedBy = [user._id]
          localStorage.setItem('likes', JSON.stringify(likes));
          const body = {groupID: id, likes: likes[0].likes, userID: user._id};
  
          const response = await fetch(`http://localhost:4000/api/collections/newlike`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        }
      }
    }
  }

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <button type='submit' className='like-button' onClick={likeButton}>
            <img src={process.env.PUBLIC_URL + '/hearticon.png'} />
        </button>
        <WorkoutList/>
        <WorkoutForm id={id} group={group}/>
      </div>
    </>
  )
}

export default WorkoutPage