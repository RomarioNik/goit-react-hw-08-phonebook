import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem';
import {
  List,
  Loading,
  Error,
  Message,
  WrapperMessage,
} from './ContactList.styled';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts-selector';
import { selectFilteredContacts } from '../../redux/contacts-selector';

const ContactList = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0)
    return (
      <WrapperMessage>
        <Message>Empty</Message>
      </WrapperMessage>
    );

  return (
    <>
      {isLoading && !error && <Loading>Loading contacts...</Loading>}
      {error && <Error>{`${error}. Try again :)`}</Error>}
      <List>
        {filteredContacts.length > 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
