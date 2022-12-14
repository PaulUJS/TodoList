import React, { useRef, useState } from 'react';
import CollectionList from './CollectionList';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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
      <div className='search-container'>
        <form onSubmit={searchCollections}>
          <input placeholder='Collection-ID' ref={groupIDRef}/>
          <input placeholder='Workout-Type' ref={typeRef}/>
          <CustomLink to='/searchresults'><button type='submit'>Search</button></CustomLink>
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