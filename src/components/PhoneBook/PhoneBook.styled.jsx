import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export const TitlePrime = styled.h1`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const TitleSecond = styled.h2`
  color: ${({ theme }) => theme.colors.mainText};
`;
