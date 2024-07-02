import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const user = useSelector(state => state.user.value);
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location, 'gggg');

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { prevUrl: location.pathname } });
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default PrivateRoute;
