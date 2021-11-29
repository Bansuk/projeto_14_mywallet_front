import { signOutUser } from '../services/api.services';
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

const isValuePositive = value => {
  return (value >= 0)
}
export { signOut, getUserName, isValuePositive };
