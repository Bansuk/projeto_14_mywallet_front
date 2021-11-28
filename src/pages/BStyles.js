import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  max-width: 500px;
  min-width: 300px;
  width: 90vw;
`;

const Header = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: 700;
  justify-content: space-between;
  margin-top: 25px;

  & .header__icon {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Display = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  height: 65vh;
  justify-content: center;
  margin-top: 22px;
  max-width: 500px;
  min-width: 300px;
  text-align: center;
  width: 90vw;

  & span {
    color: #868686;
    font-size: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Statement = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  justify-content: flex-start;
  width: 95%;
`;

const Transactions = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;

  & .balance__total {
    color: #000;
    font-weight: 700;
  }
`;

const BalanceValue = styled.div`
  color: ${props => props.balanceColor};
`;

export {
  Container,
  Body,
  Header,
  Display,
  Buttons,
  Statement,
  Transactions,
  Total,
  BalanceValue,
};
