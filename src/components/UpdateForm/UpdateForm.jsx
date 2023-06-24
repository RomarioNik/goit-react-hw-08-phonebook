import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, InputContact, Button } from '../ContactForm/ContactForm.styled';
import { updateContact } from '../../redux/contacts-operations';

const UpdateForm = ({ id, contactName, contactNumber, setVisible }) => {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

  const dispatch = useDispatch();

  const handleChangeInputName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeInputNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(updateContact({ id, user: { name, number } }));
    setVisible(prev => !prev);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <InputContact
        type="text"
        name="name"
        value={name}
        onChange={handleChangeInputName}
        placeholder=""
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <InputContact
        type="tel"
        name="number"
        value={number}
        onChange={handleChangeInputNumber}
        placeholder=""
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Update contact</Button>
    </Form>
  );
};

UpdateForm.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default UpdateForm;
