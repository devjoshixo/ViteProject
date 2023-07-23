import Options from './Options';
import classes from './Department.module.css';

const data = [
  {
    id: 1,
    department: 'Business Services',
    sub_departments: [
      'Accounting & Accounting Services',
      'Auctions',
      'Business Services - General',
      'Call Centers & Business Centers',
    ],
  },
  {
    id: 2,
    department: 'customer service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    id: 3,
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const Department = () => {
  return (
    <div className={classes.Card}>
      {data.map((item) => {
        return (
          <Options
            key={item.id}
            department={item.department}
            sub_departments={item.sub_departments}
          />
        );
      })}
    </div>
  );
};

export default Department;
