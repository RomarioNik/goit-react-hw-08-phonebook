import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Container,
  PhoneBook,
  Wrapper,
  TitlePrime,
  TitleSecond,
} from './App.styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <PhoneBook>
        <Wrapper>
          <TitlePrime>Phonebook</TitlePrime>
          <ContactForm />
        </Wrapper>

        <Wrapper>
          <TitleSecond>Contacts</TitleSecond>
          <Filter />
        </Wrapper>
        <ContactList />
      </PhoneBook>
    </Container>
  );
};

export default App;
