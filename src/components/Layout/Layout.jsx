import React from 'react';
import { Container, Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <UserMenu />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </Container>
  );
};

export default Layout;
