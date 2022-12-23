import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from '../context/CollectionContext';
import { Context as SessionContext } from '../context/SessionContext';

function SearchBar() {
  const groupIDRef = useRef();
  const typeRef = useRef();

  const { collection, setCollection } = useContext(Context);
  const [collectionState, setCollectionState] = useState([]);
  const { setSession } = useContext(SessionContext);

  async function searchCollections(e) {
    e.preventDefault();
    const groupID = groupIDRef.current.value;
    const group = {groupID: groupID};

    const response = await fetch(`http://localhost:4000/api/collections/${groupID}`);
    const json = await response.json();

    if (response.ok) {
      setCollectionState(json);
      groupIDRef.current.value = null;
      typeRef.current.value = 'FullBody';
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
        <label>Enter Collection ID</label>
        <input placeholder='Collection-ID'  className='search-input' ref={groupIDRef}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
    </>
  )
}

export default SearchBar;