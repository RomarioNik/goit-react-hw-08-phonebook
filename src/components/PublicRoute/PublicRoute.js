import { PATHS } from 'constants/paths';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth-selector';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to={location.state ?? PATHS.BASE} />
  );
};

export default PublicRoute;
