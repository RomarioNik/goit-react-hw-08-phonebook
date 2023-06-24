import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { WrapForm, WrapLink, NavLinkStyled } from './styled/LoginPage.styled';
import { useLocation } from 'react-router-dom';
import { PATHS } from 'constants/paths';

const LoginPage = () => {
  const location = useLocation();
  const isPathNameLogin = location.pathname === `/${PATHS.LOGIN}`;

  return (
    <>
      <WrapForm>
        <LoginForm />
      </WrapForm>
      <WrapLink>
        {isPathNameLogin ? (
          <NavLinkStyled to={`/${PATHS.REGISTER}`}>Registration</NavLinkStyled>
        ) : (
          <NavLinkStyled to={`/${PATHS.LOGIN}`}>click to Login</NavLinkStyled>
        )}
      </WrapLink>
    </>
  );
};

export default LoginPage;
