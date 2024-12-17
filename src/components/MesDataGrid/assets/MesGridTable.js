import * as React from 'react';
import '../shared/MesInputStyle.css';
import { DataGrid, GridToolbar, GridFooter } from '@mui/x-data-grid';
import MesCustomCheckBox from './MesCustomCheckBox';
import { ReactComponent as FilterIcon } from '../shared/images/assets/FilterIconAlt.svg';
import { ReactComponent as ColumnSortingSelectedAltIcon } from '../shared/images/assets/ColumnSortingSelectedAltIcon.svg';
import { ReactComponent as ColumnSortingSelectedIcon } from '../shared/images/assets/ColumnSortingSelectedIcon.svg';
import MesGridTableDefaultToolbar from './MesGridTableDefaultToolbar';
import MesGridTableDefaultFooter from './MesGridTableDefaultFooter';

export default function MesGridTable({
    columns = [
        {
            field: 'id',
            headerName: '#',
            flex: 2,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 4,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            flex: 4,
            editable: false,
        },
        {
            field: 'location',
            headerName: 'Location',
            flex: 4,
            editable: true,
        },
    ],
    rows = [],
    localeText = { toolbarFilters: "" },
    hideFooter = false,
    HideToolbar = false,
    rowEditMode = "cell",
    rowModesModel = {},
    handleRowModesModelChange = () => { },
    handleRowEditStop = () => { },
    processRowUpdate = () => { },
    slots = { // Customize the appearance of the Data Grid
        toolbar: MesGridTableDefaultToolbar, // Use a custom toolbar instead of the default toolbar
        footer: MesGridTableDefaultFooter, // Use a custom footer instead of the default footer
        openFilterButtonIcon: FilterIcon, // Change the icon of Filter Button in the Toolbar
        columnSortedAscendingIcon: ColumnSortingSelectedAltIcon,
        columnSortedDescendingIcon: ColumnSortingSelectedIcon,
        baseCheckbox: MesCustomCheckBox,
    },
    slotProps = {},
    classNameTable = 'renderDataGrid cantierTextInput make-it-circle',
    initialState = { // Initialize grid data parameters
        pagination: { paginationModel: { pageSize: 10 } }, // Initialize pagination to display ten initialRows per page
        sorting: {
            sortModel: [
                {
                    field: 'id',
                    sort: 'desc',
                },
            ],
        },
    },
    columnVisibilityModel = {},
    getRowIdHandler = null,
    disableRowSelectionOnClick = true,
    checkboxSelection = true,
    onSelectionChange = () => { },
    DoubleClickCellHandler = () => { },
}) {

    return <DataGrid
        autoHeight={true}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        className={classNameTable}
        pageSizeOptions={[5, 10, 25, 100]}
        rows={rows}
        columns={columns}
        editMode={rowEditMode} // Use editMode="row" to edit entries in a single row instead of a single cell
        rowModesModel={rowModesModel} // Handle Rows' Edit mode
        onRowModesModelChange={handleRowModesModelChange} // Check if a Selected Row has changed its Edit mode
        onRowEditStop={handleRowEditStop} // Check the Selected Row to change Edit mode upon clicking Cross button
        processRowUpdate={processRowUpdate} // Handle Row Updates locally
        initialState={initialState}
        localeText={localeText} // Modify or remove text from Toolbar or Footer's buttons
        slots={slots} // Customize the appearance of the Data Grid
        slotProps={slotProps} // Add Props to slots in this Data Grid
        getRowId={getRowIdHandler}
        columnVisibilityModel={columnVisibilityModel}
        onRowSelectionModelChange={onSelectionChange}
        hideFooter={hideFooter}
        hideToolbar={HideToolbar}
        onCellDoubleClick={DoubleClickCellHandler}
    />
}