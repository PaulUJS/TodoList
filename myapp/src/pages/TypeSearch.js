import React from 'react';

import TypeSearchBar from '../components/TypeSearchBar';
import UserNavbar from '../components/UserNavbar';
import CollectionList from '../components/CollectionList'

function TypeSearch() {
  return (
    <>
			<UserNavbar/>
			<div className='user-container'>
				<CollectionList/>
				<TypeSearchBar/>
			</div>
		</>
  )
}

export default TypeSearch