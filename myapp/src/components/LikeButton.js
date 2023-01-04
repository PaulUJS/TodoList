import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LikeButton({active}) {
  const { id } = useParams();
  const [isActive, setIsActive] = useState(active);

  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);
  let likes = JSON.parse(localStorage.getItem('likes'));

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
    setIsActive(current => !current);

    if (likes[0].likedBy.length == 0) {
      likes[0].likes += 1;
      likes[0].likedBy = [user._id];
      localStorage.setItem('likes', JSON.stringify(likes));
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};
      fetchAPIAdd('put', body, 'newlike');
    } else {
      for (let x in likes[0].likedBy) {
        console.log('for loop')
        if (x = user._id) {
          likes[0].likes -= 1;
          likes[0].likedBy = [];
          localStorage.setItem('likes', JSON.stringify(likes));
          const body = {groupID: id, likes: likes[0].likes, userID: user._id};
          fetchAPIRemove('put', body, 'removelike');
        } 
  
        if (x != user._id) {
          likes[0].likes += 1;
          likes[0].likedBy = [user._id]
          localStorage.setItem('likes', JSON.stringify(likes));
          const body = {groupID: id, likes: likes[0].likes, userID: user._id};
          fetchAPIAdd('put', body, 'newlike');
        }
      }
    }
  }

  return (
    <>
      <div>
      <button type='submit' className='like-button' onClick={likeButton}
        style={{ backgroundColor: isActive ? "Red" : "Black" }}
      />
      </div>
    </>
  )
}

export default LikeButton