import React from 'react';
import Navbar from '../components/Navbar';

export default function Main() {
  return (
    <>
      <Navbar/>
      <div className='main-container'>
        <div className='main-body'>
          <h1>Welcome to Workout Planner</h1>
        </div>
        <div className='main-footer'>
          <div className='footer-1'>
            <p>Create a collection of workouts</p>
          </div>
          <div className='footer-2'>
            <p>Share your collection with others to recieve likes by making it public</p>
          </div>
          <div className='footer-3'>
            <p>Search for and like other's collections to find new workouts</p>
          </div>
        </div>
      </div>
    </>
  )
}

