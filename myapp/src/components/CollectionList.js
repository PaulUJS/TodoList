import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/CollectionContext';
import Collection from './Collection';

function CollectionList() {
  const { collection, setCollection } = useContext(Context);
  if ( collection.length === 0) {
    return (
      <div>No Current Collections</div>
    )
  } else {
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
}

export default CollectionList;