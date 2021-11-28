import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const NewTransactionButton = ({ type }) => {
  return (
    <Button>
      {type === 'entrada' ? (
        <AiOutlinePlusCircle className={'button__icon'} />
      ) : (
        <AiOutlineMinusCircle className={'button__icon'} />
      )}
      <span>
        Nova <br />
        {type}
      </span>
    </Button>
  );
};

const Button = styled.button`
  background-color: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: 700;
  height: 114px;
  justify-content: space-between;
  padding: 10px;
  text-align: left;
  width: 156px;

  & .button__icon {
    font-size: 22px;
  }

  &:hover {
    background-color: #5c0b7c;
    cursor: pointer;
  }
`;

export default NewTransactionButton;
