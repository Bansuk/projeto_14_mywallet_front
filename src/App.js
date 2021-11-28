import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalStyle from './styles/styleGlobal';
import UserContext from './Contexts/UserContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Balance from './pages/Balance';
import NewTransaction from './pages/NewTransaction';
import Error from './pages/Error';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path='/login' exact>
            <SignIn setUser={setUser} />
          </Route>
          <Route path='/cadastro' exact component={SignUp} />
          <ProtectedRoute
            path='/'
            exact
            render={() => <Balance setUser={setUser} />}
          ></ProtectedRoute>
          <ProtectedRoute path='/transacao' exact component={NewTransaction} />
          <Route path='/erro' exact component={Error} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
