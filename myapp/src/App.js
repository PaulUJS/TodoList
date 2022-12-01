import React from 'react'
import { nanoid } from 'nanoid';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Userpage from './components/Userpage';
import Main from './components/Main';
import Registration from './components/Registration';

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/userpage' element={<Userpage/>} />
        </Routes>
      </div>
    </>
  )
}


export default App;
