import React from 'react'
import Navbar from './Navbar';

export default function Registration() {

  return (
  <>
    <form className='regi-form'>
      <h1>Create Account</h1>
      <label>Enter your Email</label>
        <input type='email' placeholde='Email' className='email' required />
      <label>Enter your Password</label>
        <input type='password' placeholder='Password' className='password' required />
      <button>Register</button>
    </form>
  </>
  )
}

