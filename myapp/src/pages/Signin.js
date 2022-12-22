import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useMatch, useResolvedPath, redirect, useNavigate } from 'react-router-dom';

import { Context } from '../context/SessionContext';

import Navbar from '../components/Navbar';

export default function Signin() {

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const { session, setSession } = useContext(Context);

  async function validateUser(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const userInfo = { email: email, password: pass };

    const response = await fetch('http://localhost:4000/api/user/validate', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json =  await response.json();

    if (response.ok) {
      setSession(json);
      localStorage.setItem('session', JSON.stringify(json));
      emailRef.current.value = null;
      passRef.current.value = null;
      navigate('/userpage');
    }
  };

  return (
    <>
      <Navbar/>
      <div className='regi-container'>
        <form className='regi-form' onSubmit={validateUser}>
          <h1>Sign In</h1>
          <label>Enter your Email</label>
            <input ref={emailRef} placeholder='Email' type='email' required/>
          <label>Enter your Password</label>
            <input ref={passRef} placeholder='Password' type='password' required/>
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