import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PATHS } from 'constants/paths';
import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth-operations';
import {
  Form,
  Title,
  InputStyled,
  LabelStyled,
  IconUser,
  IconEmail,
  IconLock,
  ButtonStyled,
  IconArrow,
} from './LoginForm.styled';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const location = useLocation();
  const isPathNameLogin = location.pathname === `/${PATHS.LOGIN}`;

  const handleChange = ({ target: { name, value } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (name) {
      dispatch(register({ name, email, password }));
    }

    if (!name) {
      dispatch(login({ email, password }));
    }

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Title>{isPathNameLogin ? 'Welcome Back!' : 'Create Account'}</Title>

        {!isPathNameLogin && (
          <LabelStyled htmlFor="userName">
            <IconUser />
            <InputStyled
              type="text"
              name="userName"
              id="userName"
              value={name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </LabelStyled>
        )}

        <LabelStyled htmlFor="email">
          <IconEmail />
          <InputStyled
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </LabelStyled>

        <LabelStyled htmlFor="password">
          <IconLock />
          <InputStyled
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </LabelStyled>
        <ButtonStyled type="submit">
          {isPathNameLogin ? 'Sign In' : 'Sign Up'}
          <IconArrow />
        </ButtonStyled>
      </Form>
    </>
  );
};

export default LoginForm;
