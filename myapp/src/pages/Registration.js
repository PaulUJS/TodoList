import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Registration() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function registerUser(e) {
    e.preventDefault();
    const userInfo = { email, password };

    const response = fetch('http://localhost:4000/api/user/register', {
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
    <div className='regi-container'>
      <form className='regi-form' onSubmit={registerUser}>
        <h1>Create Account</h1>
        <label>Enter your Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='email' required />
        <label>Enter your Password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='password' required />
        <button>Register</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>  
  </>
  )
}

