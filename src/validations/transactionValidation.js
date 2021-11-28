import { transactionSchema } from './schemes';

function validateTransactionInput(body) {
  let isTransactionValid;

  isTransactionValid = transactionSchema.validate(body).error;

  const errorMessage =
    isTransactionValid && JSON.stringify(isTransactionValid.details[0].message);

  if (errorMessage?.includes('value')) {
    return {
      errorId: 1,
      errorMessage: 'O número inserido não é válido.',
    };
  } else if (errorMessage?.includes('description')) {
    return {
      errorId: 2,
      errorMessage: 'A descrição deve possuir no máximo 30 caracteres.',
    };
  }
}

export default validateTransactionInput;
