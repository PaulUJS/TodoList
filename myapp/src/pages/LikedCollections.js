import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';

import CollectionList from '../components/CollectionList';
import UserNavbar from '../components/UserNavbar';

function LikedCollections() {
  const { setSession } = useContext(SessionContext);
  const { collection, setCollection } = useContext(Context);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const sessionStorage = localStorage.getItem('session');
    const user = JSON.parse(sessionStorage);
    setSession(user);

    async function fetchLikes() {
      const body = {_id: user._id}
      const response = await fetch(`http://localhost:4000/api/user/likes`, {_id: user._id});
      const json = await response.json();

      if (response.ok) {
        setUser(json);
      }
    }
    fetchLikes();
  }, [])

  useEffect(() => {
    user.map(likes => {
      if (likes.likes != null) {
        setCollection(likes.likes);
      }
    })
  }, [user])

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