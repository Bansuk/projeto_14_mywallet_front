import { signOutUser } from '../Services/api.services';
import decodeToken from './decodeToken';

const signOut = ({ setUser, token }) => {
  signOutUser(token);
  setUser(null);
  localStorage.removeItem('user');
};

const getUserName = token => {
  const { userName } = token && decodeToken(token);
  return userName;
};

export { signOut, getUserName };
