import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Button } from '../styles/styleAuth';
import { signInUser } from '../services/api.services.js';
import validateUserInput from '../validations/authValidation';

const SignIn = ({ setUser }) => {
  let userPersistence = {};
  const history = useHistory();
  const [errorHandler, setErrorHandler] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    if (validateUserInput(body, 'sign-in')) {
      setErrorHandler(validateUserInput(body, 'sign-in'));
      return;
    }

    signInUser(body)
      .then(res => {
        const token = res.data;
        setUser(token);
        userPersistence = JSON.stringify(token);
        localStorage.setItem('user', userPersistence);
        history.push('/');
      })
      .catch(err => history.push('/erro'));
  };

  return (
    <Container>
      <h1>MyWallet</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='E-mail'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {errorHandler.errorId === 2 && <span>{errorHandler.errorMessage}</span>}
        <input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {errorHandler.errorId === 3 && <span>{errorHandler.errorMessage}</span>}
        <Button>Entrar</Button>
      </Form>
      <Link to={'/cadastro'}>Primeira vez? Cadastre-se!</Link>
    </Container>
  );
};

export default SignIn;
