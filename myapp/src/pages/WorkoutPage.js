import React from 'react';

import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'
import UserNavbar from '../components/UserNavbar';

function WorkoutPage() {
  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <WorkoutList/>
        <WorkoutForm/>
      </div>
    </>
  )
}

export default WorkoutPage