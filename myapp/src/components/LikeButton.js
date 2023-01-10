import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LikeButton({liked}) {
  const { id } = useParams();
  
  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);
  let likes = JSON.parse(localStorage.getItem('likes'));
  const [userLike, setUserLike] = useState(false);
  let likedBy = [];

  useEffect(() => {
    console.log(liked)
    for (let x = 0; x < likedBy.length; x++) {
      if (likedBy[x] == user._id) {
        setUserLike(!userLike);
        console.log('true')
      }
    }

  }, [])

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
    for (let x = 0; x < likedBy.length; x++) {
      if (likedBy[x] == user._id) {
        likedBy = [user._id];
      }
    }

    if (userLike) {
      likes[0].likes -= 1;
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};
      fetchAPIRemove('put', body, 'removelike');
      likedBy = [];
      console.log(likedBy)
      setUserLike(!userLike)
      alert('You have removed your like from this collection!');
    } 
    if (!userLike) {
      likes[0].likes += 1;
      const body = {groupID: id, likes: likes[0].likes, userID: user._id};
      fetchAPIAdd('put', body, 'newlike');
      setUserLike(!userLike)
      console.log(likedBy)
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