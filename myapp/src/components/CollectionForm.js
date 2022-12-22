import React, { useState, useRef, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Context as SessionContext } from '../context/SessionContext';
import { Context } from '../context/CollectionContext';

function CollectionForm() {
  const { session, setSession } = useContext(SessionContext);
  const sessionStorage = localStorage.getItem('session');
  const user = JSON.parse(sessionStorage);

  const workoutTypeRef = useRef();
  const groupNameRef = useRef();

  const [collectionState, setCollectionState] = useState([]);
  const { collection, setCollection } = useContext(Context);

  const [error, setError] = useState(null);

  async function createCollection(e) {
    e.preventDefault();

    const workoutType = workoutTypeRef.current.value;
    const groupName = groupNameRef.current.value;

    const newCollection = {group: groupName, type: workoutType, groupID: nanoid(), userID: user._id, username: user.displayName, likes: 0};
    setCollectionState(newCollection);

    const response = await fetch('http://localhost:4000/api/collections/newcollection', {
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
      groupNameRef.current.value = null;
      workoutTypeRef.current.value = null;
      setError(null);
    }
  };

  useEffect(() => {
    setCollection([...collection, collectionState])
  }, [collectionState]);


  return (
    <>
      <form className='collection-form' onSubmit={createCollection}>
        <label className='top-label'>Collection Name</label>
        <input placeholder='Collection Name' ref={groupNameRef}type='text'/>

        <label className='bot-label'>Collection Type</label>
        <select ref={workoutTypeRef}>
          <option>FullBody</option>
          <option>UpperBody</option>
          <option>LowerBody</option>
          <option>Push</option>
          <option>Pull</option>
          <option>Other</option>
        </select>

        <button type='submit'>Create Collection</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </>
  )
}

export default CollectionForm
