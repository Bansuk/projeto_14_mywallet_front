import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Button } from '../styles/styleAuth';
import { signUpUser } from '../Services/api.services';
import validateUserInput from '../validations/authValidation';

const SignUp = () => {
  const history = useHistory();
  const [errorHandler, setErrorHandler] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    if (validateUserInput(body, 'sign-up')) {
      setErrorHandler(validateUserInput(body, 'sign-up'));
      return;
    }

    signUpUser(body)
      .then(res => history.push('/login'))
      .catch(err => history.push('/erro'));
  };

  return (
    <Container>
      <h1>MyWallet</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        {errorHandler.errorId === 1 && <span>{errorHandler.errorMessage}</span>}
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
        <input
          type='password'
          placeholder='Confirme a senha'
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
          required
        />
        {errorHandler.errorId === 4 && <span>{errorHandler.errorMessage}</span>}
        <Button>Cadastrar</Button>
      </Form>
      <Link to={'/login'}>Já tem uma conta? Entre agora!</Link>
    </Container>
  );
};

export default SignUp;
