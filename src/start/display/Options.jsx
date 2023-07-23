/* eslint-disable react/prop-types */
import classes from './Options.module.css';
import { useState } from 'react';
import SubOptions from './SubOptions';
const Options = (props) => {
  const [minimised, setMinised] = useState(false);
  const [departmentList, SetDepartmentList] = useState(props.sub_departments);
  const sub_length = props.sub_departments.length;

  const changeMinimised = () => {
    setMinised((prevState) => !prevState);
  };

  const changeHandler = (event) => {
    const { name, checked } = event.target;
    if (name === 'allselect') {
      const temp_sub = departmentList.map((item) => {
        return { item, isChecked: checked };
      });
      SetDepartmentList(temp_sub);
    } else {
      const temp_sub = departmentList.map((item) => {
        return item === name ? { item, isChecked: checked } : item;
      });
      SetDepartmentList(temp_sub);
    }

    console.log(departmentList);
  };

  return (
    <>
      <div className={classes.department}>
        <p className={classes.minimised} onClick={changeMinimised}>
          <b>{minimised ? '+' : '-'}</b>
        </p>
        <input type='checkbox' name='allselect' onChange={changeHandler} />
        <p>
          {props.department} <small>({sub_length})</small>
        </p>
      </div>
      {minimised ? (
        ''
      ) : (
        <div className={classes.subdepartments}>
          {departmentList.map((item) => {
            return <SubOptions item={item} key={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default Options;
