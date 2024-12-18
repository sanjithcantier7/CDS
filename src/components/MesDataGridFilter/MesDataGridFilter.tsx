import { IconButton, Menu, Tooltip } from '@mui/material';
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';
import FilterIcon from "./assets/FilterIcon.svg"

const StlyedIconButton = styled(IconButton)({
    // width: "4vh",
    // height: "3vh",
    width: "40px",
    height: "30px",
    //   border: "1px solid red",
    borderRadius: "6px",
});



interface IMesDataGridFilter {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    tooltipTitle?: string | undefined;
    popupComponent?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}

const MesDataGridFilter: FC<IMesDataGridFilter> = (props: IMesDataGridFilter) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Tooltip title={props.tooltipTitle || "Filter Panel"}>
                <StlyedIconButton
                    onClick={
                        handleClick
                    }
                    sx={{
                        // p: "0.8vh 1.2vh",
                        p: "0.8px 1.2px",
                        mt: -0.5,
                        borderRadius: "0.6vh",
                        background: "#FFF",
                        boxShadow:
                            "0px 2px 5px 0px rgba(89, 96, 120, 0.10), 0px 0px 0px 1px rgba(70, 79, 96, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)",
                    }}
                >
                    <FilterIcon />
                </StlyedIconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{ mt: 1 }}
            >
                {props.popupComponent}
            </Menu>
        </div>
    )
}

export default MesDataGridFilter
