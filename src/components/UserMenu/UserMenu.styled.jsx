import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

export const UserName = styled.p`
/* display: flex;
justify-content: flex-end; */
`;

export const NavLinkStyled = styled(NavLink)`
color: ${({ theme }) => theme.colors.mainText};

&.active {
    color: #7d81ff;
}
`;

export const Button = styled.button`
  height: 30px;
  padding: 4px 12px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgItems};
`;