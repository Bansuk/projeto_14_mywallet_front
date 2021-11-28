import styled from 'styled-components';

const Transaction = ({ date, description, value }) => {
  let isValuePositive = true;
  value = value.replace('.', ',');
  const newValue = value.replace('-', '');
  if (newValue !== value) isValuePositive = false;
  const formattedDate = new Date(date);

  return (
    <TransactionStyle>
      <div>
        <span className={'transaction__date'}>
          {formattedDate.getDate() + '/' + (formattedDate.getMonth() + 1)}
        </span>
        <span className={'transaction__description'}>{description}</span>
      </div>
      <TransactionValue
        transactionColor={isValuePositive ? '#03ac00' : '#c70000'}
      >
        {newValue}
      </TransactionValue>
    </TransactionStyle>
  );
};

export default Transaction;

const TransactionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  & span {
    font-size: 16px;
  }

  & .transaction__date {
    color: #c6c6c6;
  }

  & .transaction__description {
    color: #000;
    margin-left: 10px;
  }
`;

const TransactionValue = styled.div`
  color: ${props => props.transactionColor};
`;
