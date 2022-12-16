import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Userpage from './pages/Userpage';
import Main from './pages/Main';
import Registration from './pages/Registration';
import ResultsPage from './pages/ResultsPage';
import UserNavbar from './components/UserNavbar';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/userpage' element={<Userpage/>} />
          <Route path='/likedcollections'/>
          <Route path='/logout' element={<><UserNavbar/><div>hello</div></>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/searchresults' element={<ResultsPage/>} />
        </Routes>
      </div>
    </>
  )
}


export default App;
