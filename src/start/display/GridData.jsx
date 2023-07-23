import { useEffect, useState } from 'react';
import griddata from '../../api/griddata';
import Box from '@mui/material/Box';
import classes from './GridData.module.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Content Body',
    width: 500,
    editable: true,
  },
];

const GridData = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const get = async () => {
      setRows(await griddata());
    };
    get();
  }, []);
  return (
    <div className={classes.outer}>
      <Box
        className={classes.box}
        sx={{
          height: 400,
          width: '100%',
          margin: '3rem 0 2rem 0',
          color: 'white',
        }}
      >
        <DataGrid
          rows={rows}
          className={classes.grid}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default GridData;
