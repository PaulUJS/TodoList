import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <Link to='/' className='site-title'>Workout Planner</Link>
        <ul>
          <CustomLink to='/register'><button className='nav-button'>Sign Up</button></CustomLink>
          <CustomLink to='/signin'><button className='nav-button'>Log In</button></CustomLink>
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