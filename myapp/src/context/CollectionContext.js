import React, { createContext, useState } from 'react';

export const Context = createContext();

export function CollectionContextProvider({ children }) {
  const [collection, setCollection] = useState([]);

  return (
    <Context.Provider value={{ collection, setCollection }}>
      {children}
    </Context.Provider>
  )
}

export default CollectionContextProvider;