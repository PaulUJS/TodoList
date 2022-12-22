import React, { useEffect, useContext } from 'react'

import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';

import CollectionList from '../components/CollectionList';
import UserNavbar from '../components/UserNavbar';

function LikedCollections() {
  const { setSession } = useContext(SessionContext);
  const { setCollection } = useContext(Context);

  useEffect(() => {
    const sessionStorage = localStorage.getItem('session');
    const user = JSON.parse(sessionStorage);
    setSession(user);

    async function fetchLikes() {
      const response = await fetch(`http://localhost:4000/api/user/likes`, {_id: user._id});
      const json = await response.json();

      if (response.ok) {  
      }
    }

  }, [])

  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <CollectionList/>
      </div>
    </>
  )
}

export default LikedCollections