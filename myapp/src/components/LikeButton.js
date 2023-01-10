import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../context/CollectionContext';

function LikeButton() {
  const { id } = useParams();
  const { collection, setCollection } = useContext(Context);
  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);
  let likes = JSON.parse(localStorage.getItem('likes'));
  let likedBy = [];



  useEffect(() => {
    if (likes != null) {
      if (likes.length > 0) {
        likedBy = likes[0].likedBy
      }
    }
  }, [likes])

  async function fetchAPIAdd(method, body, url) {
    const response = await fetch(`http://localhost:4000/api/collections/${url}`, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const liked = {_id: user._id, likes: likes[0]}
    const userResponse = await fetch(`http://localhost:4000/api/user/updatelikes`, {
      method: method,
      body: JSON.stringify(liked),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } 

  async function fetchAPIRemove(method, body, url) {
    const unliked = {_id: user._id, groupID: id}

    const response = await fetch(`http://localhost:4000/api/collections/${url}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const userResponse = await fetch(`http://localhost:4000/api/user/removeuserlike`, {
      method: method,
      body: JSON.stringify(unliked),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async function likeButton() {
    console.log(likedBy)
    if (likedBy.includes(user._id)) {
      likes[0].likes -= 1;
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};
      likedBy = [];
      fetchAPIRemove('put', body, 'removelike');
      alert('You have removed your like from this collection!');
    } 
    else if (!likedBy.includes(user._id)) {
      likes[0].likes += 1;
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};
      likedBy = [user._id];
      fetchAPIAdd('put', body, 'newlike');
      alert('You have liked this collection!');
    }
  }

  return (
    <>
      <div>
        <button type='submit' className='like-button' onClick={likeButton}/>
      </div>
    </>
  )
}

export default LikeButton