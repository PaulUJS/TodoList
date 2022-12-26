import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Userpage from './pages/Userpage';
import Main from './pages/Main';
import Registration from './pages/Registration';
import ResultsPage from './pages/ResultsPage';
import SearchPage from './pages/SearchPage';
import WorkoutPage from './pages/WorkoutPage';
import Logout from './components/Logout';
import LikedCollections from './pages/LikedCollections';
import TypeSearch from './pages/TypeSearch';

function App() {

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/userpage' element={<Userpage/>} />
          <Route path='/collection/:group/:id' element={<WorkoutPage/>} />
          <Route path='/likedcollections' element={<LikedCollections/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/searchresults' element={<ResultsPage/>} />
          <Route path='/typesearch' element={<TypeSearch/>} />
        </Routes>
      </div>
    </>
  )
}


export default App;
