import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';

import CollectionList from '../components/CollectionList';
import UserNavbar from '../components/UserNavbar';

function LikedCollections() {
  const { session, setSession } = useContext(SessionContext);
  const { collection, setCollection } = useContext(Context);

  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);

  useEffect(() => {
    setSession(user);
    setCollection(user[0].likes)
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