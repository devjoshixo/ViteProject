/* eslint-disable react/prop-types */
import classes from './SubOptions.module.css';
const SubOptions = (props) => {
  const subCheckHandler = (event) => {
    props.onCheckChange(event);
  };

  return (
    <div className={classes.subOptions}>
      <input
        type='checkbox'
        checked={props.item.isChecked}
        name={props.item.name}
        onChange={subCheckHandler}
      />
      <p>{props.item.name}</p>
    </div>
  );
};

export default SubOptions;
