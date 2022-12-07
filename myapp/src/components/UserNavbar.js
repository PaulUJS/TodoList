import React, { useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function UserNavbar() {
  const [isShown, setIsShown] = useState(false);
  const searchRef = useRef();
  function showSearchBar(e) {
    setIsShown(current => !current);
  };

  return (
    <>
      <nav className='nav'>
        <Link to='/userpage' className='site-title'>User</Link>
        <ul>
          <button onClick={showSearchBar}>Search</button>
          {isShown && (
            <div className='search-container'>
              <input placeholder='Search' ref={searchRef}></input>
            </div>
          )}
          <CustomLink to='/yourcollections'><button className='nav-button'>Collections</button></CustomLink>
          <CustomLink to='/likedcollections'><button className='nav-button'>Likes</button></CustomLink>
          <CustomLink to='/logout'><button className='nav-button'>Log Out</button></CustomLink>
        </ul>
      </nav>
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