import React, { useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function SearchBar() {
  const searchRef = useRef();

  const { collection, setCollection } = useContext(Context);
  useEffect(() => {
    async function searcCollections() {
      // Grabs the workouts from the db and stores them in the json variable
      const response = await fetch(`http://localhost:4000/api/collections/`);
      const json = await response.json();
  
      if (response.ok) {
        setCollection(json);
      }    
    };
    searchCollections();
  }, []);

  return (
    <>
      <div className='search-container'>
        <form onSubmit={searchCollections}>
          <input placeholder='Search' ref={searchRef}/>
          <CustomLink to='/searchresults'>
            <button type='submit'>Search</button>
          </CustomLink>
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