import styled from 'styled-components';
import { ReactComponent as userIcon } from '../../images/user.svg';
import { ReactComponent as lockIcon } from '../../images/lock.svg';
import { ReactComponent as arrowIcon } from '../../images/right-arrow.svg';
import { ReactComponent as emailIcon } from '../../images/email.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const LabelStyled = styled.label`
  position: relative;
  margin-bottom: 20px;
  width: 250px;
`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: none;
  padding: 10px;
  padding-left: 25px;
  font-weight: 500;
  width: 100%;
  transition: border-color 250ms linear;

  &:active,
  &:focus,
  &:hover {
    border-color: #7d81ff;
    outline: none;
  }
`;

export const IconUser = styled(userIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 16px;
  height: 16px;
  fill: #7d81ff;
`;

export const IconEmail = styled(emailIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 16px;
  height: 16px;
  fill: #7d81ff;
`;

export const IconLock = styled(lockIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 16px;
  height: 16px;
  fill: #7d81ff;
`;

export const ButtonStyled = styled.button`
  position: relative;
  background: #fff;
  font-size: 14px;
  margin-top: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 250px;
  color: ${({ theme }) => theme.colors.secondText};
  cursor: pointer;
  transition: border-color 250ms linear;

  &:active,
  &:focus,
  &:hover {
    border-color: #7d81ff;
    outline: none;
  }
`;

export const IconArrow = styled(arrowIcon)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: #7d81ff;
`;
