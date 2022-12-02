import React from 'react'
import NumericInput from 'react-numeric-input';

export default function WorkoutInput() {
  return (
    <>
      <div>
        <form>
          <label>Enter exercise name</label>
          <input type='text' />

          <label>Enter amount of reps</label>
          <NumericInput/>

          <label>Enter exercise weight</label>
          <NumericInput/>

          <button>Create Exercise</button>
        </form>
        
      </div>
    </>
  )
}

