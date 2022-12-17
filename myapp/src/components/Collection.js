import React from 'react';
import { isRouteErrorResponse, Link, useMatch, useResolvedPath} from 'react-router-dom';

function Collection({ collection }) {
  return (
    <>
      <form className='collection-container'>
        <CustomLink to={`/collection/${collection.group}/${collection.groupID}`}>
          <button type='submit' className='collection-container'>
            <h2>{collection.group}</h2>
            <p>{collection.groupID}</p>
            <p>{collection.type}</p>
            <img src={process.env.PUBLIC_URL + '/hearticon.png'} />
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