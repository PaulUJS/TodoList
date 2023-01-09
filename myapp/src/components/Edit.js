import React, { useContext, useRef, useState, useEffect } from 'react'
import { Context } from '../context/CollectionContext';

function Edit({ workouts }) {
  const { collection, setCollection } = useContext(Context);
  const [collectionState, setCollectionState] = useState([]);
  const useNameRef = useRef();
  const useWeightRef = useRef();
  const useRepsRef = useRef();
  const useSetsRef = useRef();

  async function editWorkout(e) {
    e.preventDefault();
    const name = useNameRef.current.value;
    const reps = useWeightRef.current.value;
    const weight = useRepsRef.current.value;
    const sets = useSetsRef.current.value;
    const workoutFetch = {workouts: {name: name, weight: weight, reps: reps, sets: sets}, workoutID: workouts.workoutID, groupID: collection.groupID};

    const response = await fetch('http://localhost:4000/api/collections/editworkout', {
      method: 'PUT',
      body: JSON.stringify(workoutFetch),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    if (response.ok) {
      console.log(json)
    }
  }

  

  return (
    <form className='edit-form' onSubmit={editWorkout}>
      <label>Exercise name</label>
      <input ref={useNameRef} type='text' required/>

      <label>Amount of Reps</label>
      <input ref={useWeightRef} type='number' required/>

      <label>Weight(lbs)</label>
      <input ref={useRepsRef} type='number' required/>

      <label>Amount of Sets</label>
      <input ref={useSetsRef} type='number' required/>
      <button onClick={editWorkout} type='submit'>Edit</button>
    </form>
  )
}

export default Edit