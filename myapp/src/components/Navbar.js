import React from 'react'

import Registration from './Registration';
import Signin from './Signin';
import Main from './Main';

export default function Navbar() {
  if (Authenticated) {
    return (
      <>
        <nav className='nav'>
          <a href={<Main/>} className='site-title'>WorkoutBuddy</a>

          <ul>
            <a href=''><button className='nav-button'>Sign Out</button></a>
            <a href=''><button className='nav-button'>Account</button></a>
          </ul>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className='nav'>
          <a href={<Main/>} className='site-title'>WorkoutBuddy</a>
  
          <ul>
            <a href={<Registration/>}><button className='nav-button'>Sign Up</button></a>
            <a href={<Signin/>}><button className='nav-button'>Log In</button></a>
          </ul>
        </nav>
      </>
    )
  }
}

