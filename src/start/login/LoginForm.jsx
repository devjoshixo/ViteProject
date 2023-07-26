/* eslint-disable react/jsx-key */
import classes from './LoginForm.module.css';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import loginImage from '../../assets/4957136.jpg';
import LoginContext from '../../context/Login/LoginContext';
import codes from '../../data/code';
import ErrorPopUp from '../../UI/ErrorPopUp';

const LoginForm = () => {
  //User data state for the log in form
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    number: '',
    code: '+91',
  });

  //State for error message pop up
  const [errormessage, setErrorMessage] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setErrorMessage(validate(formDetails));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errormessage).length === 0 && isSubmit) {
      //Push Item to localStorage
      localStorage.setItem('userData', JSON.stringify({ formDetails }));

      //Set state to empty
      setFormDetails({ name: '', email: '', number: '' });

      //Make User Login
      ctx.toggleLoggedIn(true);

      //Redirect to the Next Page
      navigate.push('/next-page');
    }
  }, [ctx, errormessage, formDetails, isSubmit, navigate]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.number) {
      errors.number = 'Phone Number is required';
    }
    return errors;
  };

  return (
    <div className={classes.box}>
      {ctx.errorPop ? <ErrorPopUp /> : ''}
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
          <p className={classes.errorMessage}>{errormessage.name}</p>
        </div>

        <div className={classes.forminput}>
          <label htmlFor=''>Phone Number</label>
          <select
            name='code'
            className={classes.selectors}
            onChange={inputHandler}
            id='codes'
            required
          >
            {codes.map((code) => {
              return (
                <option value={code.dial_code}>
                  {code.name} ({code.dial_code})
                </option>
              );
            })}
          </select>
          <input
            type='text'
            maxLength='10'
            pattern='\d{10}'
            name='number'
            value={formDetails.number}
            onChange={inputHandler}
          ></input>
          <p className={classes.errorMessage}>{errormessage.number}</p>
        </div>

        <div className={classes.forminput}>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            value={formDetails.email}
            onChange={inputHandler}
          ></input>
          <p className={classes.errorMessage}>{errormessage.email}</p>
        </div>
        <div className={classes.actionButton}>
          <button className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
