import React, { useContext, useEffect } from 'react';

import { Context } from '../context/CollectionContext';
import Collection from './Collection';

function CollectionList() {
  const { collection, setCollection } = useContext(Context);
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
  
  return ( 
    collection.map(collections => {
      return (
        <>
          <Collection key={collections.id} collection={collections}/>
        </>
      )
    })
  )
}

export default CollectionList;