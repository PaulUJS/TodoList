import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import Userpage from './pages/Userpage';
import Main from './pages/Main';
import Registration from './pages/Registration';

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
