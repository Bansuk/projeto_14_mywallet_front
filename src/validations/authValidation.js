import { signUpSchema, signInSchema } from './schemes';

function validateUserInput(body, page) {
  let isInputInvalid;

  if (page === 'sign-up') {
    isInputInvalid = signUpSchema.validate(body).error;
  } else {
    isInputInvalid = signInSchema.validate(body).error;
  }

  const errorMessage =
    isInputInvalid && JSON.stringify(isInputInvalid.details[0].message);

  if (errorMessage?.includes('name')) {
    return {
      errorId: 1,
      errorMessage:
        'O nome deve ter entre 2 e 255 caracteres e não deve conter números ou caracteres especiais, apenas letras.',
    };
  } else if (errorMessage?.includes('email')) {
    return {
      errorId: 2,
      errorMessage: 'O email não foi digitado corretamente.',
    };
  } else if (errorMessage?.includes('pattern')) {
    return {
      errorId: 3,
      errorMessage:
        'A senha deve ter entre 8 e 64 caracteres, ao menos uma letra maiúscula e uma minúscula e um caractere espcial.',
    };
  } else if (errorMessage?.includes('passwordConfirmation')) {
    return {
      errorId: 4,
      errorMessage: 'As senhas inseridas não coincidem.',
    };
  }

  return isInputInvalid;
}

export default validateUserInput;
