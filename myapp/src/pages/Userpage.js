import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionForm from '../components/CollectionForm';
import CollectionList from '../components/CollectionList'
import UserNavbar from '../components/UserNavbar';

export default function Userpage() {

  return (
    <>
      <UserNavbar/>
      <CollectionForm/>
      <Routes>
        <Route path='/userpage' element={CollectionList}></Route>
        <Route path='/likedcollections'></Route>
        <Route path='/logout'></Route>
      </Routes>
    </>
  )
}

