import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'


// useRef hook allows you to reference input data from the page in a variable
// useState allows you to store the data from a page in state
// useEffect hook 

function App() {
  if (authenticated) {
    return (
      UserPage()
    )
  }
  else {
    return (
      LandingPage()
    )
  }
}

function Register() {
  const [emailState, setEmail] = useState()
  const [passState, setPass] = useState()

  const emailRef = useRef()
  const passRef = useRef()

  function createUser(e) {
    let email = emailRef.current.value
    let pass = passRef.current.value

    if (email === '' || pass === '') return
    setEmail(email)
    setPass(pass)
    emailRef.current.value = null
    passRef.current.value = null
  }

  useEffect(() => {
    const url = 'http://localhost:3000/register';

    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json(emailState, passState)
      }
      catch (error) {
        console.log('error', error)
      }
    };
    fetchData()
  }, [])

  return (
    <>
      <div>Create Account</div>
      <label>
        <input type='email' placeholde='Email' ref={emailRef} required />
      </label>
      <label>
        <input type='password' placeholder='Passowrd' ref={passRef} required />
      </label>
      <button>Register</button>
    </>
  )

}

function SignIn() {
  
}

function LandingPage() {

}

function UserPage() {
  const [exercises, setExercises] = useState([])
  const exerciseNameRef = useRef()
  
  return (
    <>

    </>
  );
}


export default App;
