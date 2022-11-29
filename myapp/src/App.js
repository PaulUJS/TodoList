import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'

import Userpage from './components/Userpage';
import Main from './components/Main';
import Registration from './components/Registration';

// useRef hook allows you to reference input data from the page in a variable
// useState allows you to store the data from a page in state
// useEffect hook 

function App() {
  if (authenticated) {
    return (
      <Userpage/>
    )
  }
  else {
    return (
      <Main/>
    )
  }
}




export default App;
