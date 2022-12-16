import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from '../context/CollectionContext';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import UserNavbar from './UserNavbar';

function SearchBar() {
  const groupIDRef = useRef();
  const typeRef = useRef();
  const { collection, setCollection } = useContext(Context);
  const { collectionState, setCollectionState } = useState([]);
  const [error, setError] = useState(null);

  async function searchCollections(e) {
    e.preventDefault();

    const groupID = groupIDRef.current.value;
    const type = typeRef.current.value;
    const group = {groupID: groupID, type: type};
    setCollectionState(group);

    const response = await fetch(`http://localhost:4000/api/collections/collection`, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log('error');
    }
    if (response.ok) {
      groupIDRef.current.value = null;
      typeRef.current.value = null;
      setError(null);
    }
  };

  useEffect(() => {
    setCollection([collectionState]);
  }, [collectionState]);

  return (
    <>
      <div className='user-container'>
        <form className='search-form' onSubmit={searchCollections}>
          <label>Enter Collection ID</label>
          <input placeholder='Collection-ID'  className='search-input' ref={groupIDRef}/>
          <label>Enter Collection Type</label>
          <select>
          <option ref={typeRef}>FullBody</option>
          <option ref={typeRef}>UpperBody</option>
          <option ref={typeRef}>LowerBody</option>
          <option ref={typeRef}>Push</option>
          <option ref={typeRef}>Pull</option>
          <option ref={typeRef}>Other</option>
          </select>
          <CustomLink to='/searchresults'><button className='search-button' type='submit'>Search</button></CustomLink>
          {error && <div className='error'>{error}</div>}
        </form>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
};

export default SearchBar;