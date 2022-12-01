import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <Link to='/' className='site-title'>WorkoutBuddy</Link>

        <ul>
          <CustomLink to='/register'><button className='nav-button'>Sign Up</button></CustomLink>
          <CustomLink to='/signin'><button className='nav-button'>Log In</button></CustomLink>
        </ul>
      </nav>
    </>
  )
}

function CustomLink(to, children, ...props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  
  return (
    <li className={resolvedPath === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )

}