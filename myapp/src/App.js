import React from 'react'
import { nanoid } from 'nanoid';

import Userpage from './components/Userpage';
import Main from './components/Main';

function App() {
  if (authenticated) {
    return (
      <>
        <Userpage/>
      </>
    )
  } else {
    return (
      <>
        <Main/>
      </>
    )
  }
}


export default App;
