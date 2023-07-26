import classes from './ErrorPopUp.module.css';

const ErrorPopUp = () => {
  return (
    <div className={classes.errorModal}>
      <p>Please Login First!</p>
    </div>
  );
};

export default ErrorPopUp;
