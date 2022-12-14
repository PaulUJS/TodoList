import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CollectionForm from '../components/CollectionForm';
import CollectionList from '../components/CollectionList'
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import UserNavbar from '../components/UserNavbar';

export default function Userpage() {

  return (
    <>
      <UserNavbar/>
      
      <Routes>
        <Route path='/userpage' element={<><CollectionForm/><CollectionList/></>}/>
        <Route path='/likedcollections'/>
        <Route path='/logout'/>
        <Route path='/collection' element={<><WorkoutForm/><WorkoutList/></>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='/searchresults' element={<><div>Results</div><SearchBar/><CollectionList/></>} />
      </Routes>
    </>
  )
}

