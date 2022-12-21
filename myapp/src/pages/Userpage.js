import React, { useContext, useEffect } from 'react';
import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';
import CollectionForm from '../components/CollectionForm';
import CollectionList from '../components/CollectionList'
import UserNavbar from '../components/UserNavbar';

export default function Userpage() {
  const { collection, setCollection } = useContext(Context);
  const { session, setSession } = useContext(SessionContext);
  
  useEffect(() => {
    async function fetchCollection() {
      // Grabs the workouts from the db and stores them in the json variable
      const response = await fetch(`http://localhost:4000/api/collections/`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
      } 
    };
    fetchCollection();
  }, []);

  useEffect(() => {
    console.log(collection)
  }, [collection])


  return (
      <>
        <UserNavbar/>
        <div className='user-container'>
          <CollectionList/>
          <CollectionForm/>
        </div>
      </>
  )
}

