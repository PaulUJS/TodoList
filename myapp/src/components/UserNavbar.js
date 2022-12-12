import React, { useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import SearchBar from './SearchBar';

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
          <SearchBar/>
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