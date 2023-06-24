import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #7d81ff;
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const WrapLink = styled.div`
  align-self: flex-end;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px;
  color: #7d81ff;
`;
