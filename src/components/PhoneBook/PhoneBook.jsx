import React from 'react';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Wrapper, TitlePrime, TitleSecond } from './PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { contacts } from 'redux/contacts-operations';

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contacts());
  }, [dispatch]);

  return (
    <>
      <TitlePrime>PhoneBook</TitlePrime>
      <Wrapper>
        <ContactForm />
      </Wrapper>

      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      <ContactList />
    </>
  );
};

export default PhoneBook;
