import React from 'react'

export default function Userpage() {
  
  const [exercises, setExercises] = useState([])
  const exerciseNameRef = useRef()
  

  return (
    <>
      <header>Workout Creator</header>
      <a>
        <div>Monday</div>
      </a>
      <a>
        <div>Tuesday</div>
      </a>
      <a>
        <div>Wednesday</div>
      </a>
      <a>
        <div>Thursday</div>
      </a>
      <a>
        <div>Friday</div>
      </a>
      <a>
        <div onClick={createWorkout}>Saturday</div>
      </a>
      <a>
        <div>Sunday</div>
      </a>
    </>
  )
}

