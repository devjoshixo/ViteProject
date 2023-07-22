import classes from './LoginForm.module.css';
import { useState } from 'react';
import loginImage from '../../assets/4957136.jpg';

const LoginForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    number: '',
  });

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDetails((prevState) => {
      return prevState[name] = value;
    });
    console.log(formDetails);
  };

  const formSubmitHandler = () => {};

  return (
    <div className={classes.box}>
      <img src={loginImage} className={classes.loginImage} />

      <form onSubmit={formSubmitHandler}>
        <h1>Login</h1>
        <div className={classes.forminput}>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' onChange={inputHandler}></input>
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Phone Number</label>
          <input type='text' name='number' onChange={inputHandler}></input>
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Email</label>
          <input type='email' name='email' onChange={inputHandler}></input>
        </div>
        <div className={classes.actionButton}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
