import React, { useContext, useRef } from 'react';

import { Context } from '../context/CollectionContext';
import Collection from './Collection';

function CollectionList() {
  const { collection, setCollection } = useContext(Context);
  
  if (collection.length === 0) {
    return (
      <>
        <div>No collections yet</div>
      </>
    )
  } else {
    return ( 
      collection.map(collections => {
       if (!collections.name) {
        return (
          <>
            <Collection key={collections.id} collection={collections}/>
          </>
        )
       }     
      })
    )
  }
}

export default CollectionList;