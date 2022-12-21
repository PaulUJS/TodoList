import React, { useEffect  } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Collection({ collection }) {
  return (
    <>
      <form className='collection-container'>
        <CustomLink to={`/collection/${collection.group}/${collection.groupID}`}>
          <button type='submit'>
            <h2>{collection.group}</h2>
            <p>Workout Type: {collection.type}</p>
            <p>Collection ID: {collection.groupID}</p>
            <p>Created By: </p>
            <p>{collection.likes} Likes</p>
          </button>
        </CustomLink>
      </form>
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

export default Collection;