import { signOutUser } from '../Services/api.services';
import decodeToken from './decodeToken';

const signOut = ({ setUser, token }) => {
  signOutUser(token);
  localStorage.removeItem('user');
  setUser(null);
};

const getUserName = token => {
  const { userName } = token && decodeToken(token);
  return userName;
};

export { signOut, getUserName };
