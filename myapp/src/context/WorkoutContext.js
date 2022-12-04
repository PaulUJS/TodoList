import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

// This keeps the local state up-to-date with the database
export function workoutsReducer(state, action) {
  switch(action.type) {
    case 'SET_WORKOUTS': 
      return {
        workouts: action.payload
      };
    case 'CREATE_WORKOUT':
      return {
        // Single new workout added to array with current workouts
        workouts: [action.payload, ...state.workouts]
      };
    default:
      return state;
  }
}

// This components wraps the app component allowing all components to access the context
export function ContextProvider({ children }) {
  // Dispatch updates the state object
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  });

  // Type describes the change of state
  // Payload is any data needed to make the change
  

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutsContext.Provider>
  )
}