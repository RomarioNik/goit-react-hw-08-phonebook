import React from 'react';
import { Container, Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <UserMenu />
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Layout;
