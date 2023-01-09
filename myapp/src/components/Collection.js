import React, { useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import DelCollection from './DelCollection';

function Collection({ collection }) {
  

  return (
    <>
      <div className='collection-container'>
        <h2>{collection.group}</h2>
        <p>Workout Type: {collection.type}</p>
        <p>Collection ID: {collection.groupID}</p>
        <p>Created By: {collection.username} </p>
        <p>{collection.likes} Likes</p>
        <div className='buttons'>
          <CustomLink to={`/collection/${collection.group}/${collection.groupID}`}><button className='workouts-btn'>See Workouts</button></CustomLink>
          <DelCollection collection={collection.groupID}/>
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

export default Collection;
