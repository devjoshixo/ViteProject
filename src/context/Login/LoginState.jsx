/* eslint-disable react/prop-types */
import LoginContext from './LoginContext';
import { useState } from 'react';
const LoginState = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = (value) => {
    setLoggedIn(value);
  };
  return (
    <LoginContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
