import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import {
  ListItem,
  ContactWrapper,
  AvatarWrapper,
  TrashButton,
  Avatar,
  Contact,
  Name,
  Phone,
  IconTrash,
  IconUpdate,
} from './ContactItem.styled';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import { useState } from 'react';

const ContactItem = ({ id, name, number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <ListItem>
      <ContactWrapper>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>

        <Contact>
          <Name>{name}</Name>
          <Phone>{number}</Phone>
        </Contact>

        <TrashButton onClick={() => setIsVisible(prev => !prev)}>
          <IconUpdate />
        </TrashButton>
        <TrashButton onClick={() => dispatch(deleteContact(id))}>
          <IconTrash />
        </TrashButton>
      </ContactWrapper>

      {isVisible && (
        <div>
          <UpdateForm
            id={id}
            contactName={name}
            contactNumber={number}
            setVisible={setIsVisible}
          />
        </div>
      )}
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
