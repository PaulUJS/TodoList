import { WorkoutsContext } from '../context/WorkoutContext';
import { useContext } from 'react';

// Custom hook for using context
export default function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error('useWorkout context be used inside a contextProvider');
  }

  return context;
}