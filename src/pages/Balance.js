import UserContext from '../Contexts/UserContext';
import { useContext, useEffect, useState } from 'react';
import {
  getTransactions,
  signOutUser,
  getBalance,
} from '../Services/api.services';
import {
  Container,
  Body,
  Header,
  Display,
  Buttons,
  Statement,
  Transactions,
  Total,
  BalanceValue,
} from './BStyles';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import Transaction from '../Components/Transaction';
import NewTransactionButton from '../Components/NewTransactionButton';

const Balance = ({ setUser }) => {
  //const { name, token } = useContext(UserContext);
  const [transactions, setTransactions] = useState([
    { transaction_id: 1, date: '11/02/2021', description: 'a', value: '12' },
  ]);
  const [balance, setBalance] = useState(0);
  const history = useHistory();
  let isValuePositive = false;
  if (balance >= 0) isValuePositive = true;

  // useEffect(() => {
  //     getTransactions(token)
  //         .then(res => setTransactions(res.data))
  //         .catch(err => alert("Erro ao obter as transações!"));
  //     getBalance(token)
  //         .then(res => setBalance(res.data))
  //         .catch(err => alert("Erro ao obter o saldo!"));
  // });

  return (
    <Container>
      <Body>
        <Header>
          <h1>Olá, {'a'}</h1>
          <RiLogoutBoxRLine
            className={'header__icon'}
            onClick={() => {
              signOutUser();
              setUser(null);
              history.push('/login');
            }}
          />
        </Header>
        <Display>
          {transactions ? (
            <Statement>
              <Transactions>
                {transactions.map(transaction => (
                  <Transaction
                    key={transaction.transaction_id}
                    date={transaction.date}
                    description={transaction.description}
                    value={transaction.value}
                  />
                ))}
              </Transactions>
              <Total>
                <div className={'balance__total'}>SALDO</div>
                <BalanceValue
                  balanceColor={isValuePositive ? '#03ac00' : '#c70000'}
                >
                  {balance.toFixed(2)}
                </BalanceValue>
              </Total>
            </Statement>
          ) : (
            <span>Não há registros de entrada ou saída</span>
          )}
        </Display>
        <Buttons>
          <Link
            to={{
              pathname: '/transacao',
              state: { type: 'entrada' },
            }}
          >
            <NewTransactionButton type='entrada' />
          </Link>
          <Link
            to={{
              pathname: '/transacao',
              state: { type: 'saída' },
            }}
          >
            <NewTransactionButton type='saída' />
          </Link>
        </Buttons>
      </Body>
    </Container>
  );
};

export default Balance;
