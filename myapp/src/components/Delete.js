import React, { useEffect } from 'react'

function Delete({ workouts }) {
  async function deleteWorkout(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:4000/api/collections/deleteworkout/${workouts}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (response.ok) {
      console.log('ok')
    }
  }
  return (
        <form onSubmit={deleteWorkout}>
          <button type='submit'>Delete</button>
        </form>
  )
}

export default Delete