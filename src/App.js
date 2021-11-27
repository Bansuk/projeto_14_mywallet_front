import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from './styles/styleGlobal';
import UserContext from './Contexts/UserContext';
import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';
import Balance from './pages/Balance';
import NewTransaction from './Components/NewTransaction';

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact>
            <SignIn setUser={setUser} />
          </Route>
          <Route path='/cadastro' exact component={SignUp} />
          <Route path='/balanco' exact>
            <Balance setUser={setUser} />
          </Route>
          <Route path='/transacao' exact component={NewTransaction} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
