import styled from 'styled-components';
import { ReactComponent as defaultAvatar } from '../../images/avatar-def.svg';
import { ReactComponent as trash } from '../../images/trash-icon.svg';
import { ReactComponent as update } from '../../images/update.svg';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Avatar = styled(defaultAvatar)`
  width: 40;
  height: 40;
`;

export const Contact = styled.div`
  flex-grow: 1;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Phone = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const IconTrash = styled(trash)`
  width: 25px;
  height: 25px;
  fill: #ff7d7d;
`;

export const IconUpdate = styled(update)`
  width: 25px;
  height: 25px;
  fill: #7d81ff;
`;

export const TrashButton = styled(AvatarWrapper).attrs(() => ({
  as: 'button',
}))`
  width: auto;
  height: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;
