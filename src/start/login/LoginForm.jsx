import classes from './LoginForm.module.css';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import loginImage from '../../assets/4957136.jpg';
import LoginContext from '../../context/Login/LoginContext';

const LoginForm = () => {
  //User data state for the log in form
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    number: '',
  });

  //State for error message pop up
  const [errormessage, setErrorMessage] = useState({
    name: true,
    email: true,
    number: true,
    isFirst: true,
  });
  const ctx = useContext(LoginContext);

  useEffect(() => {
    ctx.toggleLoggedIn(false);
    localStorage.clear();
  }, [ctx]);

  const navigate = useHistory();

  //Sets the state according to the event
  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  //Set error status of the required field
  const setErrorStatus = (name, value) => {
    setErrorMessage((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  //Phone number checker
  const res = /^\+?\d+$/;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    //Error message would not pop up until submit is clicked once
    if (errormessage.isFirst) {
      setErrorStatus('isFirst', false);
    }

    //Form Validation Checkers
    if (formDetails.name == '') {
      setErrorStatus('name', false);
    } else {
      setErrorStatus('name', true);
    }
    if (formDetails.email == '') {
      setErrorStatus('email', false);
    } else {
      setErrorStatus('email', true);
    }
    if (formDetails.number == '' || !res.test(formDetails.number)) {
      setErrorStatus('number', false);
    } else {
      if (formDetails.number.length > 9) {
        setErrorStatus('number', true);
      }
    }

    //Clear the state, save the data into local storage and redirect to next page
    if (
      errormessage.name &&
      errormessage.email &&
      errormessage.number &&
      !errormessage.isFirst
    ) {
      //Push Item to localStorage
      localStorage.setItem('userData', JSON.stringify({ formDetails }));

      //Set state to empty
      setFormDetails({ name: '', email: '', number: '' });

      //Make User Login
      ctx.toggleLoggedIn(true);

      //Redirect to the Next Page
      navigate.push('/next-page');
    }
  };

  return (
    <div className={classes.box}>
      <img src={loginImage} className={classes.loginImage} />

      <form onSubmit={formSubmitHandler}>
        <h1>Login</h1>
        <div className={classes.forminput}>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            name='name'
            value={formDetails.name}
            onChange={inputHandler}
          ></input>
          {!errormessage.name && !errormessage.isFirst && (
            <p className={classes.errorMessage}>This field cannot be empty</p>
          )}
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Phone Number</label>
          <input
            type='text'
            name='number'
            value={formDetails.number}
            onChange={inputHandler}
          ></input>
          {!errormessage.number && !errormessage.isFirst && (
            <p className={classes.errorMessage}>Enter valid Phone number</p>
          )}
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            value={formDetails.email}
            onChange={inputHandler}
          ></input>
          {!errormessage.email && !errormessage.isFirst && (
            <p className={classes.errorMessage}>This field cannot be empty</p>
          )}
        </div>
        <div className={classes.actionButton}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
