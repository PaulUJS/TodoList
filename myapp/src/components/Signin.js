import React from 'react'
import Navbar from './Navbar';

export default function Signin() {
  return (
    <>
      <div className='signin-container'>
        <form className='signin-form'>
          <h1>Sign In</h1>
          <label>Enter your Email</label>
            <input placeholder='Email' type='email' required/>
          <label>Enter your Password</label>
            <input placeholder='Password' type='password' required/>
          <label>Re-Enter your Password</label>
            <input placeholder='Password' type='password' required/>
          <button>Sign in</button>
        </form>
      </div>
      
    </>
  )
}
