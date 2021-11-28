import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Container, Header } from '../styles/styleNewTransaction';
import { Form, Button } from '../styles/styleAuth.js';
import { postTransaction } from '../Services/api.services';
import UserContext from '../contexts/UserContext';
import validateTransactionInput from '../validations/transactionValidation';

const NewTransaction = props => {
  const history = useHistory();
  const token = useContext(UserContext);
  const { type } = props.location.state;
  const [errorHandler, setErrorHandler] = useState({});
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  let parsedValue;

  const postNewTransaction = e => {
    e.preventDefault();

    type === 'saída'
      ? (parsedValue = parseInt(value) * -1)
      : (parsedValue = parseInt(value));

    const body = {
      description,
      value: parsedValue,
    };

    if (validateTransactionInput(body)) {
      setErrorHandler(validateTransactionInput(body, 'sign-in'));
      return;
    }

    postTransaction(body, token)
      .then(res => {
        history.push('/');
      })
      .catch(err => history.push('/erro'));
  };

  return (
    <Container>
      <Header>
        <h1>Nova {type}</h1>
      </Header>
      <Form onSubmit={postNewTransaction}>
        <input
          type='number'
          placeholder='Valor'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        {errorHandler.errorId === 1 && <span>{errorHandler.errorMessage}</span>}
        <input
          type='text'
          placeholder='Descrição'
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        {errorHandler.errorId === 2 && <span>{errorHandler.errorMessage}</span>}
        <Button>Salvar {type}</Button>
      </Form>
    </Container>
  );
};

export default NewTransaction;
