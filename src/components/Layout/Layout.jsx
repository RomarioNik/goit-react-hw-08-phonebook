import React from 'react';
import { Container, Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <UserMenu />
        <Suspense fallback={<div>Loading component...</div>}>
        <Outlet />
        </Suspense>
      </Wrapper>
    </Container>
  );
};

export default Layout;
