import React, { useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function SearchBar() {
  const searchRef = useRef();

  async function searchCollections(e) {
    return;
  };

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