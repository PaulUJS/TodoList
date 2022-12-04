import React from 'react'
import Navbar from '../components/Navbar';

export default function Registration() {

  return (
  <>
    <div className='regi-container'>
      <form className='regi-form'>
        <h1>Create Account</h1>
        <label>Enter your Email</label>
          <input type='email' placeholder='Email' className='email' required />
        <label>Enter your Password</label>
          <input type='password' placeholder='Password' className='password' required />
        <button>Register</button>
      </form>
    </div>
    
  </>
  )
}

