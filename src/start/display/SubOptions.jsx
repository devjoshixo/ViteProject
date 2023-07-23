/* eslint-disable react/prop-types */
import classes from './SubOptions.module.css';
const SubOptions = (props) => {
  const subCheckHandler = (event) => {};

  return (
    <div className={classes.subOptions}>
      <input
        type='checkbox'
        checked={props.item?.isChecked || false}
        onChange={subCheckHandler}
      />
      <p>{props.item}</p>
    </div>
  );
};

export default SubOptions;
