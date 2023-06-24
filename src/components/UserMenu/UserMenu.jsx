import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  UserName,
  NavLinkStyled,
  Button,
  Wrapper,
} from './UserMenu.styled';
import { PATHS } from 'constants/paths';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserEmail } from 'redux/auth-selector';
import { logout } from 'redux/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);

  const isUnknownUser =
    location.pathname === `/${PATHS.LOGIN}` ||
    location.pathname === `/${PATHS.REGISTER}`;

  const handleClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
      return;
    }
    navigate(PATHS.LOGIN);
  };

  return (
    <Container>
      <Wrapper>
        <NavLinkStyled to={PATHS.BASE}>Home</NavLinkStyled>
        <NavLinkStyled to={PATHS.CONTACTS}>My contacts</NavLinkStyled>
      </Wrapper>

      <Wrapper>
        <UserName>{isLoggedIn && userEmail}</UserName>
        {!isUnknownUser && (
          <Button type="button" onClick={handleClick}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default UserMenu;