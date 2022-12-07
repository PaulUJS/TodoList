import React, { useState, useRef, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Context } from '../context/CollectionContext';

function CollectionForm() {
  const workoutTypeRef = useRef();
  const nameRef = useRef();

  const [collectionState, setCollectionState] = useState([]);
  const { collection, setCollection } = useContext(Context);

  const [error, setError] = useState(null);

  async function createCollection(e) {
    e.preventDefault();

    const workoutType = workoutTypeRef.current.value;
    const name = nameRef.current.value;

    const newCollection = {id: nanoid(), name: name, type: workoutType};
    setCollectionState(newCollection);

    const response = fetch('http://localhost:4000/api/collections/', {
      method: 'POST',
      body: JSON.stringify(newCollection),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json =  await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log('error');
    }
    if (response.ok) {
      nameRef.current.value = null;
      workoutTypeRef.current.value = null;
      setError(null);
    }
  };

  useEffect(() => {
    setCollectionState([collectionState, ...collection])
  }, [collectionState]);


  return (
    <>
      <form className='collection-form' onSubmit={createCollection}>
        <label>Collection Name</label>
        <input ref={nameRef}type='text'/>

        <label>Workout Type</label>
        <select>
          <option ref={workoutTypeRef}>FullBody</option>
          <option ref={workoutTypeRef}>UpperBody</option>
          <option ref={workoutTypeRef}>LowerBody</option>
          <option ref={workoutTypeRef}>Push</option>
          <option ref={workoutTypeRef}>Pull</option>
          <option ref={workoutTypeRef}>Other</option>
        </select>

        <button type='submit'>Create Collection</button>
      </form>
    </>
  )
}

export default CollectionForm
