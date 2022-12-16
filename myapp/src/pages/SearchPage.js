import React from 'react';

import SearchBar from '../components/SearchBar';
import UserNavbar from '../components/UserNavbar';

function SearchPage() {
	return (
		<>
			<UserNavbar/>
			<div className='user-container'>
				<div className='collection-container'>Currently Loading</div>
				<SearchBar/>
			</div>
		</>
	)
}

export default SearchPage