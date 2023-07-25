/* eslint-disable react/prop-types */
import classes from './Options.module.css';
import shortid from 'shortid';
import { useState } from 'react';
import SubOptions from './SubOptions';
import { useEffect } from 'react';
import { useRef } from 'react';
const Options = (props) => {
  const [minimised, setMinised] = useState(false);
  const headInputRef = useRef();

  //Takes subDepartment list and converts them in objects with checked attribute
  const [departmentList, SetDepartmentList] = useState(
    props.sub_departments.map((sub) => {
      return { name: sub, isChecked: false };
    })
  );
  const sub_length = props.sub_departments.length;

  const changeMinimised = () => {
    setMinised((prevState) => !prevState);
  };

  const changeHandler = (event) => {
    const { name, checked } = event.target;
    if (name == 'head') {
      const temp_dep = departmentList.map((dep) => {
        return { ...dep, isChecked: checked };
      });
      SetDepartmentList(temp_dep);
    } else {
      const temp_dep = departmentList.map((dep) => {
        if (dep.name === name) {
          dep.isChecked = checked;
          return dep;
        } else {
          return dep;
        }
      });
      console.log();
      SetDepartmentList(temp_dep);
    }
  };

  useEffect(() => {
    let counter = false;
    departmentList.map((dep) => (dep.isChecked ? (counter = true) : ''));

    if (counter) {
      headInputRef.current.checked = true;
    } else {
      headInputRef.current.checked = false;
    }
  }, [departmentList, headInputRef]);

  return (
    <>
      <div className={classes.department}>
        <p className={classes.minimised} onClick={changeMinimised}>
          <b>{minimised ? '+' : '-'}</b>
        </p>
        <input
          type='checkbox'
          name='head'
          ref={headInputRef}
          onChange={changeHandler}
        />
        <p>
          {props.department} <small>({sub_length})</small>
        </p>
      </div>
      {minimised ? (
        ''
      ) : (
        <div className={classes.subdepartments}>
          {departmentList.map((item) => {
            return (
              <SubOptions
                name={item.name}
                onCheckChange={changeHandler}
                item={item}
                key={shortid.generate()}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Options;
