import classes from './LoginForm.module.css';
import { useState } from 'react';
import loginImage from '../../assets/4957136.jpg';

const LoginForm = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    number: '',
  });
  
  const [errormessage,setErrorMessage] = useState({
    name:true,
    email:true,
    number:true,
    isFirst:true
  })

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDetails((prevState) => {
      return {...prevState,[name]:value}
    });
  };

  const setErrorStatus = (name,value) =>{
    setErrorMessage(prevState => {
      return {...prevState,[name]:value}
    })
  };

  const res = /^\+?\d+$/ 

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(errormessage.isFirst){
      setErrorStatus('isFirst',false)
    }
    if(formDetails.name == ''){
      setErrorStatus('name',false)
    } else{
      setErrorStatus('name',true)
    }
     if(formDetails.email == ''){
      setErrorStatus('email',false)
    }  else{
      setErrorStatus('email',true)
    }
    if(formDetails.number == '' ||!res.test(formDetails.number)){
        setErrorStatus('number',false)
    } else{
      if(formDetails.number.length > 9){
        setErrorStatus('number',true)
      }
    }
  };

  return (
    <div className={classes.box}>
      <img src={loginImage} className={classes.loginImage} />

      <form onSubmit={formSubmitHandler}>
        <h1>Login</h1>
        <div className={classes.forminput}>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' onChange={inputHandler}></input>
          {!errormessage.name && !errormessage.isFirst && <p className={classes.errorMessage}>This field cannot be empty</p>}
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Phone Number</label>
          <input type='text' name='number' onChange={inputHandler}></input>
          {!errormessage.number && !errormessage.isFirst &&  <p className={classes.errorMessage}>Enter valid Phone number</p>}
        </div>
        <div className={classes.forminput}>
          <label htmlFor=''>Email</label>
          <input type='email' name='email' onChange={inputHandler}></input>
          {!errormessage.email && !errormessage.isFirst && <p className={classes.errorMessage}>This field cannot be empty</p>}
        </div>
        <div className={classes.actionButton}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
