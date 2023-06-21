import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  /* border-top: 1px solid ${({ theme }) => theme.colors.borderColor}; */
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.bgItems};
`;

export const Loading = styled.p`
  text-align: center;
  color: blue;
`;

export const Error = styled(Loading)`
  color: red;
`;
