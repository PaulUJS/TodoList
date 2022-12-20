import React from 'react';

import SearchBar from '../components/SearchBar';
import UserNavbar from '../components/UserNavbar';
import CollectionList from '../components/CollectionList';

function SearchPage() {
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

export default SearchPage