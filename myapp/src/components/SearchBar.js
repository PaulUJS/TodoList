import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from '../context/CollectionContext';

function SearchBar() {
  const groupIDRef = useRef();
  const typeRef = useRef();
  const { collection, setCollection } = useContext(Context);
  const [collectionState, setCollectionState] = useState([]);

  async function searchCollections(e) {
    e.preventDefault();
    const groupID = groupIDRef.current.value;
    const type = typeRef.current.value;
    const group = {groupID: groupID, type: type};

    const response = await fetch(`http://localhost:4000/api/collections/${groupID}`);
    const json = await response.json();

    if (response.ok) {
      setCollectionState(json);
      groupIDRef.current.value = null;
      typeRef.current.value = 'FullBody';
    }
  };

  useEffect(() => {
    setCollection(collectionState);
  }, [collectionState]);

  return (
    <>
      <form className='search-form' onSubmit={searchCollections}>
        <label>Enter Collection ID</label>
        <input placeholder='Collection-ID'  className='search-input' ref={groupIDRef}/>
        <label>Enter Collection Type</label>
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

export default SearchBar;