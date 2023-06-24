import { PATHS } from 'constants/paths';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth-selector';

const PrivetRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={`/${PATHS.LOGIN}`} state={location} />
  );
};

export default PrivetRoute;
