import React from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

function MainHome() {
  const navigate = useNavigate();
  function newPage() {
    navigate('/register');
  };
  return (
    <>
      <div className='home-container'>
        <div className='h1-wrapper'>
          <h1>Start your workout journey today</h1>
        </div>
        <h2>Learn from others and become a happier healthier version of you</h2>
        <div className='link-1'><CustomLink to='/register'><button>Sign Up</button></CustomLink></div>
        <div className='link-2'><CustomLink to='/signin'>Already have an account</CustomLink></div>
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

export default MainHome