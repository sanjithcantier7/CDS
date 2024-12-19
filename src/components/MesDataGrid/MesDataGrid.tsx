import React, { FC, ReactNode } from 'react';
import { DataGrid, DataGridProps, GridApi, GridColumnVisibilityModel, GridFooterContainer, GridInitialState, GridPagination, GridPanelFooter, GridToolbarFilterButton, GridToolbarQuickFilter, gridPageCountSelector, gridPageSelector, gridPageSizeSelector, gridPaginationModelSelector, gridRowCountSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import { GridRowModesModel, GridCellModesModel, GridFilterModel, GridSortModel, GridCellParams, GridCallbackDetails, GridColDef, GridDensity, GridPaginationModel, GridRowParams, GridRowSelectionModel, GridSlotsComponent, GridRowHeightParams, GridLocaleText, GridRowSpacingParams, GridRowSpacing, GridValidRowModel } from '@mui/x-data-grid/models';
import { Box, Checkbox, IconButton, SxProps } from '@mui/material';
import FilterIcon from './assets/FilterIconAlt.svg';
import ColumnSortingSelectedAltIcon from './assets/ColumnSortingSelectedAltIcon.svg';
import ColumnSortingSelectedIcon from './assets/ColumnSortingSelectedIcon.svg';
import CheckBoxSelectedIcon from './assets/CheckBoxSelectedIcon.svg';
import CheckBoxNotSelectedIcon from './assets/CheckboxNotSelectedIcon.svg';
import HideIndeterminateIcon from './assets/HideIndeterminateIcon.svg';
import NextIcon from "./assets/nextIcon.svg"
import NextIconDisabled from "./assets/nextIconDisabled.svg"
import PrevIcon from "./assets/PrevIcon.svg"
import PrevIconDisabled from "./assets/PrevIconDisabled.svg"
import './styles.css'

interface IMesGridFooterProps {
    asyncPagination: boolean;
    onClickNext?: (args?: any) => void;
    onClickPrev?: (args?: any) => void;
    asyncPageSize?: number;
    asyncTotal?: number;
    asyncSkip?: number;
}

interface IGridToolbarProps {
    filter?: boolean;
    filterComponent?: React.ReactNode;
}


export interface IMesDataGridProps<R extends GridValidRowModel = any>
    extends DataGridProps<R>, IMesGridFooterProps, IGridToolbarProps {
    pageSize?: number;
}

const MesGridFooter: FC<IMesGridFooterProps> = ({
    onClickNext = () => { },
    onClickPrev = () => { },
    asyncPagination = false,
    asyncPageSize = 10,
    asyncTotal = 0,
    asyncSkip = 0
}) => {
    const apiRef = useGridApiContext();
    // Selectors
    const page = useGridSelector(apiRef, gridPageSelector); // Current Page (0-based)
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector); // Rows per page
    const rowCount = useGridSelector(apiRef, gridRowCountSelector); // Total rows count
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    // Calculating the start and end indices
    const startRow = page * pageSize + 1; // Start index (1-based)
    const endRow = Math.min((page + 1) * pageSize, rowCount); // End index, capped at total row count

    // async calc
    const asyncStartRow = asyncSkip;
    const asyncEndRow = Math.min(asyncPageSize);
    const asyncPageCount = Math.ceil(asyncTotal / pageSize);


    return (
        <GridFooterContainer
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "5vh",
                backgroundColor: "#FFF", // Customize background
                padding: "0 16px",
            }}
        >
            {/* Custom Footer Info */}
            {asyncPagination ? <div style={{ fontWeight: 400, color: '#687182' }}>
                {`${asyncSkip + 1 - 10} - ${asyncSkip} of ${asyncTotal}`}
            </div> :
                <div style={{ fontWeight: 400, color: '#687182' }}>
                    {`${startRow} - ${endRow} of ${rowCount}`}
                </div>}
            {!asyncPagination && <GridPagination
                sx={{ mr: -7 }}
                labelDisplayedRows={({ from, to, count }) => { return '' }}
                slotProps={{
                    actions: {
                        nextButton: {
                            style: {
                                display: "none"
                            }
                        },
                        previousButton: {
                            style: {
                                display: "none"
                            }
                        }
                    }
                }}
            />}
            {/* Custom Actions */}
            {asyncPagination ? <div style={{ display: 'flex', flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>
                <IconButton
                    onClick={() => {
                        apiRef.current.setPage(Math.max(0, page - 1));
                        onClickPrev();
                    }}
                    disabled={asyncSkip === 10}
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                >
                    {asyncSkip === 10 ? <PrevIconDisabled /> : <PrevIcon />}
                </IconButton>
                <div style={{ fontWeight: 400, color: '#687182', paddingBottom: 4 }}>
                    {`${page + 1 * asyncSkip / pageSize} / ${asyncPageCount}`}
                </div>
                <IconButton
                    onClick={() => {
                        apiRef.current.setPage(Math.min(pageCount - 1, page + 1));
                        onClickNext();
                    }}
                    disabled={asyncPageCount * 10 === asyncSkip}
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                >
                    {asyncPageCount * 10 === asyncSkip ? <NextIconDisabled /> : <NextIcon />}
                </IconButton>
            </div> : <div style={{ display: 'flex', flexDirection: 'row', alignContent: "center", alignItems: 'center' }}>
                {/* <button onClick={() => apiRef.current.setPage(0)}>First</button> */}
                <IconButton
                    onClick={() => {
                        apiRef.current.setPage(Math.max(0, page - 1));
                        onClickPrev();
                    }}
                    disabled={page === 0}
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                >
                    {page === 0 ? <PrevIconDisabled /> : <PrevIcon />}
                </IconButton>
                <div style={{ fontWeight: 400, color: '#687182', paddingBottom: 4 }}>
                    {`${page + 1} / ${pageCount}`}
                </div>
                <IconButton
                    onClick={() => {
                        apiRef.current.setPage(Math.min(pageCount - 1, page + 1));
                        onClickNext();
                    }}
                    disabled={page === 0 || page === pageCount - 1}
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                >
                    {(page === 0 || page === pageCount - 1) ? <NextIconDisabled /> : <NextIcon />}
                </IconButton>
                {/* <button onClick={() => apiRef.current.setPage(pageCount - 1)}>
                    Last
                </button> */}
            </div>}
        </GridFooterContainer>
    );
}

const MesCustomCheckBox = (props: any) => {
    return <Checkbox
        {...props}
        /*indeterminate={props.Indeterminate}*/
        indeterminateIcon={<HideIndeterminateIcon />}
        sx={{
            '&.MuiButtonBase-root.MuiCheckbox-root:hover': {
                borderRadius: '6px',
            }
        }}
        icon={<CheckBoxNotSelectedIcon />}
        checkedIcon={<CheckBoxSelectedIcon />}
    />;
}

const CustomToolbar: React.FC<IGridToolbarProps> = ({ filter = false, filterComponent }) => {
    return (
        <Box
            sx={{
                p: 1, // Add padding
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#f5f5f5", // Optional: Custom background color
            }}
        >
            {filter && filterComponent}
            {/* Quick Filter for search */}
            <GridToolbarQuickFilter
                variant='outlined'
                placeholder="Search..."
                size="small"
                sx={{
                    // padding: "0 8px",
                    // minWidth: "250px",
                    ".MuiInputBase-root": {
                        height: '30px',
                        fontSize: '20'
                    }
                }}
            />
        </Box>
    );
};

const MesData = <R extends GridValidRowModel>(props: IMesDataGridProps<R>) => {
    const { columns,
        rows,
        apiRef,
        checkboxSelection = false,
        hideFooter = false,
        sx,
        filter,
        pageSize,
        filterComponent,
        ...otherProps } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                apiRef={apiRef}
                checkboxSelection={checkboxSelection}
                initialState={
                    {
                        // Initialize grid data parameters
                        pagination: { paginationModel: { pageSize: pageSize || 5 } }, // Initialize pagination to display ten initialRows per page
                        sorting: {
                            sortModel: [
                                {
                                    field: 'id',
                                    sort: 'desc',
                                },
                            ],
                        },
                    }
                }
                hideFooter={hideFooter}
                sx={{ ...sx, ...customStyleSx }}
                style={{ zIndex: 0 }}
                editMode={otherProps.editMode || "row"}
                columnHeaderHeight={otherProps.columnHeaderHeight || 40}
                slots={{
                    ...otherProps.slots,
                    toolbar: (props) => <CustomToolbar filter={filter} filterComponent={filterComponent || <div>Toolbar Filter Component</div>} />,
                    footer: (props) => <MesGridFooter asyncPagination={otherProps.asyncPagination} onClickNext={otherProps.onClickNext} onClickPrev={otherProps.onClickPrev} asyncPageSize={otherProps.asyncPageSize} asyncSkip={otherProps.asyncSkip} asyncTotal={otherProps.asyncTotal} />, // Use a custom footer instead of the default footer
                    openFilterButtonIcon: FilterIcon as unknown as React.JSXElementConstructor<any>, // Change the icon of Filter Button in the Toolbar
                    columnSortedAscendingIcon: ColumnSortingSelectedAltIcon as unknown as React.JSXElementConstructor<any>,
                    columnSortedDescendingIcon: ColumnSortingSelectedIcon as unknown as React.JSXElementConstructor<any>,
                    baseCheckbox: MesCustomCheckBox,
                }}

                pageSizeOptions={otherProps.pageSizeOptions || [5, 10, 15, 25]}
                {...otherProps}
            />
        </div>
    );
};

export default MesData;

const customStyleSx = {
    "& .MuiDataGrid-root": {
        border: "none",
    },
    "& .MuiDataGrid-main": {
        "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            border: "none",
            position: "sticky", // Make header sticky
            top: 0, // Position the sticky header at the top
            zIndex: 1, // Ensure header stays on top
            backgroundColor: "white", // Ensure the header has a background color
        },
        "& .MuiDataGrid-virtualScroller": {
            overflowY: "auto", // Enable scrolling
            overflowX: "hidden", // Disable horizontal scrolling if not needed
            zIndex: 0,
        },
        "& .MuiDataGrid-columnHeadersInner": {
            backgroundColor: "white",
        },
        "& div div div div > .MuiDataGrid-cell": {
            borderBottom: "none",
            border: "none",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontSize: "16px",
        },
    },
    // headers
    ".MuiDataGrid-columnHeaderTitle": {
        lineHeight: "16px",
        fontWeight: "bold",
        fontSize: "14px",
        letterSpacing: "0.44px",
        textTransform: "uppercase",
    },
    // paginator size
    ".MuiDataGrid-footerContainer": {
        // minHeight: "43px",
        // maxHeight: "43px",
    },
    // cell selection
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
    {
        outline: "none",
    },
    // zig-zag row color
    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-child(odd)": { backgroundColor: "#F8F8F8" },
        },
    },

}