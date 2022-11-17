import React, { useState, useEffect, useRef } from 'react'
import TodoList from './TodoList';
import { nanoid } from 'nanoid'

// useRef hook allows you to reference input data from the page in a variable
// useState allows you to store the data from a page in state
// useEffect hook 

const LSKEY = 'todoApp.todos'

function App() {
  
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
