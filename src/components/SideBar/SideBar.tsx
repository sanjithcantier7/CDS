import { Drawer, IconButton, Stack, styled } from '@mui/material'
import SideBarIcon from "./toggleIcon.svg"
import { ReactNode } from 'react';

const drawerWidth = '28vh';
const shrunkDrawerWidth = '5vh';
const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
    width: open ? drawerWidth : shrunkDrawerWidth,
    flexShrink: 0,
    index: 3,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: 600,
    }),
    backgroundColor: "#EAEAEA",
    "& .MuiDrawer-paper": {
        borderColor: "#EAEAEA",
        width: open ? drawerWidth : shrunkDrawerWidth,
        // overflow: "hidden",
        backgroundColor: "#EAEAEA",
        top: "5vh",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            // duration: theme.transitions.duration.leavingScreen,
            duration: 600,
            delay: 300,
        }),
    },
}));




interface Props {
    open: boolean,
    onClose: () => void
    onClick: () => void
    menus: ReactNode
}

const SideBar = (props: Props) => {
    return (

        <StyledDrawer variant="permanent"
            anchor="left"
            open={props.open}
            onClose={props.onClose}>
            <Stack sx={{ alignItem: "flex-start", backgroundColor: "#c0c0c0" }}>
                <IconButton sx={{ backgroundColor: "#c0c0c0", alignItems: "center", justifyContent: 'center', borderRadius: 0, height: '5vh', width: '5vh' }} disableRipple onClick={props.onClick}>
                    <img alt="toggle-side-bar" src={SideBarIcon} style={{ height: '3vh', width: '3vh' }} />
                </IconButton>
                {props.menus}
            </Stack>
        </StyledDrawer>
    )
}

export default SideBar
