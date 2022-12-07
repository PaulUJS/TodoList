import React, { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {
  const [exercises, setExercises] = useState([]);

  return (
    <Context.Provider value={{ exercises, setExercises }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;