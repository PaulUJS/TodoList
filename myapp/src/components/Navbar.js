import React from 'react'

import Registration from './Registration';
import Signin from './Signin';

export default function Navbar() {
  return (
    <>
      <nav className='nav'>
        <a className='site-title'>
          WorkoutBuddy
        </a>

        <ul>
          <a><button className='nav-button'>Sign Up</button></a>
          <a><button className='nav-button'>Log In</button></a>
        </ul>
      </nav>
    </>
  )
}
