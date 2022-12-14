import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';

import Signin from './pages/Signin';
import Userpage from './pages/Userpage';
import Main from './pages/Main';
import Registration from './pages/Registration';
import SearchBar from './components/SearchBar';
import CollectionForm from './components/CollectionForm';
import CollectionList from './components/CollectionList'
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import UserNavbar from './components/UserNavbar';

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
          <Route path='/collection' element={<><UserNavbar/><WorkoutForm/><WorkoutList/></>}/>
          <Route path='/search' element={<SearchBar/>}/>
          <Route path='/searchresults' element={<><UserNavbar/><div>Results</div><SearchBar/><CollectionList/></>} />
        </Routes>
      </div>
    </>
  )
}


export default App;
