import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SecondPage from './pages/SecondPage';
import ErrorPage from './pages/ErrorPage';
import LoginContext from './context/Login/LoginContext';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const ctx = useContext(LoginContext);

  const nextPage = () => {
    if (ctx.loggedIn) {
      return <SecondPage />;
    } else {
      ctx.toggleErrorPop(true);
      return <Redirect to='/' />;
    }
  };

  return (
    <Switch>
      <Route path='/' exact>
        <LoginPage />
      </Route>
      <Route path='/next-page'>{nextPage}</Route>
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
