import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Signin() {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function validateUser(e) {
    e.preventDefault();
    const userInfo = { email, password };

    const response = fetch('http://localhost:4000/api/user/validate', {
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
      setEmail('');
      setPassword('');
      setError(null);
    }
  };

  return (
    <>
      <Navbar/>
      <div className='regi-container'>
        <form className='regi-form' onSubmit={validateUser}>
          <h1>Sign In</h1>
          <label>Enter your Email</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' required/>
          <label>Enter your Password</label>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' required/>
          <button>Sign in</button>
          {error && <div className='error'>{error}</div>}
        </form>
      </div>
    </>
  )
}
