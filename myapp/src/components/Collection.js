import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Collection({ collections }) {
  return (
    <>
      <CustomLink to='/collection'>
        <div className='collection-container'>
          <h2>{collections.name}</h2>
        </div>
      </CustomLink>
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