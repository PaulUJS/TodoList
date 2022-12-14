import React, { useContext } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Context } from '../context/CollectionContext';

function Collection({ collection }) {
  return (
    <>
        <div className='collection-container'>
          <h2>{collection.group}</h2>
          <p>{collection.type}</p>
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