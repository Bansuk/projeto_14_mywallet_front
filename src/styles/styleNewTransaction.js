import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: inherit;
  justify-content: left;
  max-width: 500px;
  width: 90vw;

  & h1 {
    font-size: 27px;
    font-weight: 700;
    margin: 25px 0 40px 0;
  }
`;

export { Container, Header };
