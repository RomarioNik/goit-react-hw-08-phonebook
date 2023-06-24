import styled from 'styled-components';

export const Container = styled.div`
  max-width: 475px;

  margin-left: auto;
  margin-right: auto;
  padding: 20px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
`;
