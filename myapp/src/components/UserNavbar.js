import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function UserNavbar() {
  return (
    <>
      <nav className='nav'>
        <Link to='/userpage' className='site-title'>User</Link>
        <ul>
          <CustomLink to='/search'><button className='nav-button'>Search</button></CustomLink>
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