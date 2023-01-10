import React, { useEffect, useContext } from 'react';
import { Context as SessionContext } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const { session, setSession } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setSession(null);
    navigate('/');
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout