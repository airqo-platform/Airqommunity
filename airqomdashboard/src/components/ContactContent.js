import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'Number',
    headerName: 'Number',
    width: 150,
    editable: true,
  },
  {
    field: 'Residency',
    headerName: 'Residency',
    
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'Number') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: "AQ1", lastName: 'AirQommunity', Number: '0780303876', Residency: "Makerere" },

];

export default function ContactContent() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
