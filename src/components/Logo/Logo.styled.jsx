import styled from 'styled-components';
import { ReactComponent as phoneBook } from '../../images/phone-book.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const LogoIcon = styled(phoneBook)`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  fill: #7d81ff;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.mainText};
`;
