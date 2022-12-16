import React from 'react';

import CollectionList from '../components/CollectionList';
import UserNavbar from '../components/UserNavbar';
import SearchBar from '../components/SearchBar';

function ResultsPage() {
  return (
    <>
      <UserNavbar/>
      <div className='user-container'>
        <CollectionList/>
        <SearchBar/>
      </div>
    </>
  )
}

export default ResultsPage