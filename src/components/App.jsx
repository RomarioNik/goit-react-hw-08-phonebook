import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import { PATHS } from 'constants/paths';
import { currentUser } from 'redux/auth-operations';
import { selectIsLoggedIn, selectToken } from 'redux/auth-selector';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import { deleteToken } from 'redux/auth-slice';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await dispatch(currentUser()).unwrap();
      } catch (e) {
        dispatch(deleteToken());
        navigate(PATHS.LOGIN);
      }
    };

    token && !isLoggedIn && fetchCurrentUser();
  }, [dispatch, token, isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path={PATHS.BASE} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={PATHS.LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={PATHS.REGISTER}
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path={PATHS.CONTACTS}
          element={
            <PrivetRoute>
              <ContactsPage />
            </PrivetRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
