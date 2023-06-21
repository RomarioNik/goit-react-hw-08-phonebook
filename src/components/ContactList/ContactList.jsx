import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import { List, Loading, Error } from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/selector';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) return null;

  return (
    <>
      {isLoading && !error && <Loading>Loading contacts...</Loading>}
      {error && <Error>{`${error}. Try again :)`}</Error>}
      <List>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
