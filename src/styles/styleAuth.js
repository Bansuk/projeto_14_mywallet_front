import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  & h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 25px;
  }

  & a {
    font-size: 15px;
    font-weight: 700;
    margin-top: 35px;
  }
`;

const Form = styled.form`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  margin-bottom: 15px;
  max-width: 500px;
  width: 90vw;

  & input {
    border-radius: 5px;
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    height: 60px;
    margin-bottom: 13px;
    padding-left: 15px;
  }

  & input::placeholder {
    color: #000;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
  }

  & span {
    color: #fff;
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  background-color: #a328d6;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  height: 50px;

  &:hover {
    background-color: #5c0b7c;
    cursor: pointer;
  }
`;

export { Container, Form, Button };
