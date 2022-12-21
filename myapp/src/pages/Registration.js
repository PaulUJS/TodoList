import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

export default function Registration() {

  const emailRef = useRef();
  const passRef = useRef();
  const displayNameRef = useRef();

  const [error, setError] = useState(null);

  async function registerUser() {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const displayName = displayNameRef.current.value;

    const userInfo = { email: email, password: pass, displayName: displayName };
    
    const response = await fetch('http://localhost:4000/api/user/register', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json =  await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      emailRef.current.value = null;
      passRef.current.value = null;
      displayNameRef.current.value = null;
      setError(null);
    }
  };

  return (
  <>
    <Navbar/>
    <div className='regi-container'>
      <form className='regi-form' onSubmit={registerUser}>
        <h1>Create Account</h1>
        <label>Enter your Display Name</label>
          <input ref={displayNameRef} type='text' placeholder='Display-Name' className='Display-Name' required />
        <label>Enter your Email</label>
          <input ref={emailRef} type='email' placeholder='Email' className='email' required />
        <label>Enter your Password</label>
          <input ref={passRef} type='password' placeholder='Password' className='password' required />
        <button type='submit'>Register</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>  
  </>
  )
}

