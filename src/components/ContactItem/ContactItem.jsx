import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  ListItem,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  IconTrash,
} from './ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>

      <Contact>
        <Name>{name}</Name>
        <Phone>{phone}</Phone>
      </Contact>

      <TrashButton onClick={() => dispatch(deleteContact(id))}>
        <IconTrash />
      </TrashButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
