import React from 'react'
import MesDataGrid from '../MesDataGrid'
import { GridColDef } from '@mui/x-data-grid';
import MesDataGridFilter from '../../MesDataGridFilter/MesDataGridFilter';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 110, align: 'center', headerAlign: "center" },
];

const rows = [
    { id: 1, name: 'John Doe', age: 35 },
    { id: 2, name: 'Jane Smith', age: 28 },
    { id: 3, name: 'Jack Daniels', age: 42 },
    { id: 4, name: 'John Doe', age: 35 },
    { id: 5, name: 'Jane Smith', age: 28 },
    { id: 6, name: 'Jack Daniels', age: 42 },
    { id: 7, name: 'John Doe', age: 35 },
    { id: 8, name: 'Jane Smith', age: 28 },
    { id: 9, name: 'Jack Daniels', age: 42 },
    { id: 10, name: 'John Doe', age: 35 },
    { id: 11, name: 'Jane Smith', age: 28 },
    { id: 12, name: 'Jack Daniels', age: 42 },
    { id: 13, name: 'Jack Daniels', age: 42 },
    { id: 14, name: 'John Doe', age: 35 },
    { id: 15, name: 'Jane Smith', age: 28 },
    { id: 16, name: 'Jack Daniels', age: 42 },
    { id: 17, name: 'John Doe', age: 35 },
    { id: 18, name: 'Jane Smith', age: 28 },
    { id: 19, name: 'Jack Daniels', age: 42 },
    { id: 20, name: 'John Doe', age: 35 },
    { id: 21, name: 'Jane Smith', age: 28 },
    { id: 22, name: 'Jack Daniels', age: 42 },
    { id: 23, name: 'Jack Daniels', age: 42 },
    { id: 24, name: 'John Doe', age: 35 },
    { id: 25, name: 'Jane Smith', age: 28 },
    { id: 26, name: 'Jack Daniels', age: 42 },
    // { id: 27, name: 'John Doe', age: 35 },
    // { id: 28, name: 'Jane Smith', age: 28 },
    // { id: 29, name: 'Jack Daniels', age: 42 },
    // { id: 30, name: 'John Doe', age: 35 },
];


const Example = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'row', width: '80vw', height: '50vh' }}>
            <MesDataGrid columns={columns} rows={rows} checkboxSelection
                filter filterComponent={<MesDataGridFilter popupComponent={<h2>Hello world</h2>} />}
            />
        </div>
    )
}

export default Example
