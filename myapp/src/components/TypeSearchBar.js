import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';

function TypeSearchBar() {
  const typeRef = useRef();

  const { collection, setCollection } = useContext(Context);
  const [collectionState, setCollectionState] = useState([]);
  const { setSession } = useContext(SessionContext);

  async function searchCollections(e) {
    e.preventDefault();
    const type = typeRef.current.value;

    const response = await fetch(`http://localhost:4000/api/collections/typesearch/${type}`, {type: type});
    const json = await response.json();

    if (response.ok) {
      setCollectionState(json);
    }
  };


  useEffect(() => {
    const sessionStorage = localStorage.getItem('session');
    const user = JSON.parse(sessionStorage);
    setSession(user);
  }, [])

  useEffect(() => {
    setCollection(collectionState);
  }, [collectionState]);

  return (
    <>
      <form className='search-form' onSubmit={searchCollections}>
        <label>Enter Workout Type</label>
        <select ref={typeRef}>
          <option>FullBody</option>
          <option>UpperBody</option>
          <option>LowerBody</option>
          <option>Push</option>
          <option>Pull</option>
          <option>Other</option>
        </select>
        <button className='search-button' type='submit'>Search</button>
      </form>
    </>
  )
}

export default TypeSearchBar