/* eslint-disable react/prop-types */
import LoginContext from './LoginContext';
import { useState } from 'react';
const LoginState = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorPop, setErrorPop] = useState(false);

  const toggleLoggedIn = (value) => {
    setLoggedIn(value);
  };
  const toggleErrorPop = (value) => {
    setErrorPop(value);
  };
  return (
    <LoginContext.Provider
      value={{ loggedIn, toggleLoggedIn, errorPop, toggleErrorPop }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
