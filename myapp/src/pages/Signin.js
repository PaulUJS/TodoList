import React, { useState, useContext, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { Context } from '../context/SessionContext';

import Navbar from '../components/Navbar';

export default function Signin() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [sessionState, setSessionState] = useState([]);
  const { session, setSession } = useContext(Context);

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

    if (response.ok) {
      setSessionState(json);
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    setSession(sessionState);
  }, [sessionState])

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
          <button type='submit'>Sign in</button>
        </form>
      </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
};