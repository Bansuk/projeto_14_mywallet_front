import { Redirect, Route } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';
import { useContext } from 'react';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { token } = useContext(UserContext);
  console.log(token);
  return (
    <Route
      {...restOfProps}
      render={props =>
        token ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default ProtectedRoute;
