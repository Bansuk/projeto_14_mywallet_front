import styled from 'styled-components';
import errorImage from '../assets/error_image.png';

const error = () => {
  return (
    <Container>
      <img src={errorImage} alt='sad money cartoon' />
      <p>
        Infelizmente ocorreu um erro com a sua solicitação. Por favor, tente
        novamente.
      </p>
    </Container>
  );
};

export default error;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  & img {
    width: 15%;
  }

  & p {
    text-align: center;
    font-weight: 700;
    margin-top: 30px;
  }
`;
