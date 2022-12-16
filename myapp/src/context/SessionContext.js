import React, { createContext, useState } from 'react';

export const Context = createContext();

export function SessionContextProvider({ children }) {
  const [session, setSession] = useState([]);

  return (
    <Context.Provider value={{ session, setSession }}>
      {children}
    </Context.Provider>
  )
}

export default SessionContextProvider;