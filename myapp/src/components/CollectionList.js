import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/CollectionContext';
import Collection from './Collection';

function CollectionList() {
  const { collection, setCollection } = useContext(Context);  
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