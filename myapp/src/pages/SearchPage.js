import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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
        		<div className='custom-link'>
					<CustomLink to='/typesearch'><p>Search By Collection Type</p></CustomLink>
				</div>
			</div>
		</>
	)
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
};

export default SearchPage