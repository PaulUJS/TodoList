import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../context/CollectionContext';
import Collection from './Collection';

function CollectionList() {
  const { collection, setCollection } = useContext(Context);
  if ( collection.length === 0) {
    return (
      <div>You don't currently have any collections!</div>
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