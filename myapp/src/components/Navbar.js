import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import Registration from './Registration';
import Signin from './Signin';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <CustomLink to='/' className='site-title'>WorkoutBuddy</CustomLink>

        <ul>
          <CustomLink to='/signup'><button className='nav-button'>Sign Up</button></CustomLink>
          <CustomLink to='/login'><button className='nav-button'>Log In</button></CustomLink>
        </ul>
      </nav>
    </>
  )
}

function CustomLink(to, children, ...props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  
  return (
    <li className={path === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}