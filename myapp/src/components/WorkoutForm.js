import React, { useState } from 'react'

export default function WorkoutForm({ day }) {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  

  async function sendWorkout(e) {
    e.preventDefault();

    const workout = {day, name, weight, reps};

    // Sends a post request to the backend api to add the workout to the db
    const response = fetch('http://localhost:4000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json =  await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log('error');
    }
    if (response.ok) {
      setName('');
      setWeight('');
      setReps('');
      setError(null);
      console.log('new workout added', json);
    }
  }

  return (
    <>
      <form className='exercise-input' onSubmit={sendWorkout}>
        <label>Enter exercise name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} type='text' required/>

        <label>Enter amount of reps</label>
        <input onChange={(e) => setReps(e.target.value)} value={reps} type='number' required/>

        <label>Enter exercise weight</label>
        <input onChange={(e) => setWeight(e.target.value)} value={weight} type='number' required/>

        <button type='submit'>Submit Exercise</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </>
  )
}

