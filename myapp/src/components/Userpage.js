import React from 'react'
import Navbar from './Navbar';

export default function Userpage() {
  
  /*
  const [exercises, setExercises] = useState([])
  const exerciseNameRef = useRef()
  */

  return (
    <>
      <Navbar/>
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
        <div>Saturday</div>
      </a>
      <a>
        <div>Sunday</div>
      </a>
    </>
  )
}

