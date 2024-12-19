import React, { useEffect, useState } from 'react'
import MesDataGrid from '../MesDataGrid'
import { GridColDef, GridRowApi } from '@mui/x-data-grid';
import MesDataGridFilter from '../../MesDataGridFilter/MesDataGridFilter';

// const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'name', headerName: 'Name', width: 150 },
//     { field: 'age', headerName: 'Age', width: 110, align: 'center', headerAlign: "center" },
// ];

// const rows = [
//     { id: 1, name: 'John Doe', age: 35 },
//     { id: 2, name: 'Jane Smith', age: 28 },
//     { id: 3, name: 'Jack Daniels', age: 42 },
//     { id: 4, name: 'John Doe', age: 35 },
//     { id: 5, name: 'Jane Smith', age: 28 },
//     { id: 6, name: 'Jack Daniels', age: 42 },
//     { id: 7, name: 'John Doe', age: 35 },
//     { id: 8, name: 'Jane Smith', age: 28 },
//     { id: 9, name: 'Jack Daniels', age: 42 },
//     { id: 10, name: 'John Doe', age: 35 },
//     { id: 11, name: 'Jane Smith', age: 28 },
//     { id: 12, name: 'Jack Daniels', age: 42 },
//     { id: 13, name: 'Jack Daniels', age: 42 },
//     { id: 14, name: 'John Doe', age: 35 },
//     { id: 15, name: 'Jane Smith', age: 28 },
//     { id: 16, name: 'Jack Daniels', age: 42 },
//     { id: 17, name: 'John Doe', age: 35 },
//     { id: 18, name: 'Jane Smith', age: 28 },
//     { id: 19, name: 'Jack Daniels', age: 42 },
//     { id: 20, name: 'John Doe', age: 35 },
//     { id: 21, name: 'Jane Smith', age: 28 },
//     { id: 22, name: 'Jack Daniels', age: 42 },
//     { id: 23, name: 'Jack Daniels', age: 42 },
//     { id: 24, name: 'John Doe', age: 35 },
//     { id: 25, name: 'Jane Smith', age: 28 },
//     { id: 26, name: 'Jack Daniels', age: 42 },
//     // { id: 27, name: 'John Doe', age: 35 },
//     // { id: 28, name: 'Jane Smith', age: 28 },
//     // { id: 29, name: 'Jack Daniels', age: 42 },
//     // { id: 30, name: 'John Doe', age: 35 },
// ];


const Example = () => {
    const [rows, setRows] = useState<object[]>()
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'quote', headerName: 'Quote', width: 150 },
        { field: "author", headerName: 'Author', width: 110, align: 'center', headerAlign: "center" },
    ]
    const [params, setParams] = useState<{ limit: number, skip: number, total: number }>({
        total: 0,
        limit: 10,
        skip: 0
    })

    const handlePrev = () => {
        setParams((prev) => ({ ...prev, skip: prev.skip - 10 }))
    }
    const handleNext = () => {
        setParams((prev) => ({ ...prev, skip: prev.skip + 10 }))
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/quotes?limit=${params.limit}&skip=${params.skip}`);
            const data = await response.json();
            setRows(data?.quotes);
        } catch (err: any) {
            setRows([{
                id: 0,
                quote: err?.message,
                author: "Error - Can't Fetch Data"
            }])
        }
    }

    // api
    // useEffect(() => {
    //     fetchData();
    // }, [])

    useEffect(() => {
        fetchData();
    }, [params])

    return (
        <div style={{ display: "flex", flexDirection: 'row', width: '80vw', height: '50vh' }}>
            <MesDataGrid columns={columns} rows={rows} checkboxSelection pageSize={10}
                filter filterComponent={<MesDataGridFilter popupComponent={<h2>Hello world</h2>} />}
                onClickNext={handleNext}
                onClickPrev={handlePrev}
                asyncPagination={false}
            />
        </div>
    )
}

export default Example
