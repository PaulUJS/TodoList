import React, { useState, useEffect, useRef } from 'react'
import TodoList from './TodoList';
import { nanoid } from 'nanoid'
import { Session } from 'express-session';

// useRef hook allows you to reference input data from the page in a variable
// useState allows you to store the data from a page in state
// useEffect hook 

const LSKEY = 'todoApp.todos'

function App() {
  if (Session.authenticated) {
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
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  
  // Called once when component loads
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSKEY))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  // Called whenever something in the array at the end of the function changes
  useEffect(() => {
    // Inserts the todos into local storage
    localStorage.setItem(LSKEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    // Creates copy of todos list(in react you shouldn't modify state components directly)
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    // Calls the element currently being referenced
    const name = todoNameRef.current.value

    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: nanoid(), name: name, complete: false}]
    })
    // Resets the todo value after being called to clear the input
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}


export default App;
