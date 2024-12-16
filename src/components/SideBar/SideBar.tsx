import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled } from "@mui/material";
import SideBarIcon from "./toggleIcon.svg";
import { ReactNode } from "react";
import DefaultIcon from "./defaultMenuIcon.svg"

const drawerWidth = "28vh";
const shrunkDrawerWidth = "5vh";
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
        overflow: !open ? "visible" : "auto",
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

export interface ISideBar {
    open: boolean;
    onClose: () => void;
    onClick: () => void;
    menus: IMenuList[];
    bgColor?: string
}

export interface IMenuList {
    id: number;
    label: string;
    color?: string;
    bgColor?: string;
    childMenus: IChildMenuList[];
}

export interface IChildMenuList {
    id: number;
    onClick: () => void;
    color: string;
    bgColor: string;
    label: string;
    icon: undefined | any;
    hoverIcon: undefined | any;
    activeIcon: undefined | any;
    isActive: boolean;
}


const SideBar = (props: ISideBar) => {
    return (
        <StyledDrawer
            variant="permanent"
            anchor="left"
            open={props.open}
            onClose={props.onClose}
        >
            <Stack sx={{ alignItem: "flex-start", backgroundColor: "#c0c0c0", width: "5vh", p: 0 }}>
                <IconButton
                    sx={{
                        backgroundColor: "#c0c0c0",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 0,
                        height: "5vh",
                        width: "5vh",
                        zIndex: 0,
                        p: 0
                    }}
                    disableRipple
                    onClick={props.onClick}
                >
                    <SideBarIcon />
                </IconButton>
                <List disablePadding sx={{ p: 0, bgcolor: props.bgColor || "#EAEAEA", }}>
                    {props.open ? props.menus.map((item: IMenuList, index: number) => (
                        // <List key={index}>
                        <>
                            <ListItem key={item.id} disablePadding sx={{ width: '28vh', p: 0, ml: '1.7vh' }}>
                                <ListItemButton
                                    sx={{
                                        color: item.color || "#545454",
                                        p: 0,
                                        bgcolor: item.bgColor || "#EAEAEA",
                                        fontWeight: 700,
                                        width: '28vh',
                                        "&:hover": { backgroundColor: "#EAEAEA" },
                                        cursor: "pointer",
                                    }}
                                    disableRipple
                                    disableTouchRipple
                                >
                                    <ListItemText
                                        primary={item.label}
                                        sx={{
                                            ".MuiTypography-root": {
                                                fontWeight: 800,
                                                fontSize: '2vh',
                                                // letterSpacing: 0.2,
                                                width: '27vh',
                                                whiteSpace: "nowrap",        // Prevent wrapping
                                                overflow: "hidden",          // Handle overflow
                                                textOverflow: "ellipsis",    // Add ellipsis for long text
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            {item.childMenus.map((subItem: IChildMenuList, index: number) => (
                                <ListItemButton
                                    key={index + '-' + 'sub-list-items'}
                                    onClick={subItem.onClick}
                                    sx={{
                                        p: 0,
                                        pl: '2vh',
                                        // border: '1px solid red',
                                        height: '4vh',
                                        width: '28vh',
                                        // lineHeight: "1.8vh",
                                        color: subItem.color || "#545454",
                                        bgcolor: subItem.bgColor || "#EAEAEA",
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        alignContent: 'flex-start',
                                        // ".MuiTypography-root": {
                                        //     ":hover": {
                                        //         fontWeight: 600,
                                        //     },
                                        //     fontWeight: subItem.isActive ? 800 : 500,
                                        //     whiteSpace: "nowrap",        // Prevent wrapping
                                        //     overflow: "hidden",          // Handle overflow
                                        //     textOverflow: "ellipsis",    // Add ellipsis for long text
                                        //     fontSize: '1.6vh',
                                        // },
                                        "&:hover": { color: "#002856", },
                                        "&:active": {
                                            bgcolor: subItem.isActive ? "#DFDFDF" : "#EAEAEA",
                                            color: subItem.isActive
                                                ? "#002856"
                                                : subItem.bgColor || "#002856",
                                        },
                                        cursor: "pointer",
                                    }}

                                    disableRipple
                                    disableTouchRipple
                                >
                                    <ListItemIcon sx={{ minWidth: '4vh' }}>{subItem.icon || <DefaultIcon />}</ListItemIcon>
                                    <ListItemText sx={{
                                        // border: '1px solid green',
                                        width: '22vh',
                                        ".MuiTypography-root": {
                                            ":hover": {
                                                fontWeight: 600,
                                            },
                                            fontWeight: subItem.isActive ? 800 : 500,
                                            whiteSpace: "nowrap",        // Prevent wrapping
                                            overflow: "hidden",          // Handle overflow
                                            textOverflow: "ellipsis",    // Add ellipsis for long text
                                            fontSize: '1.6vh',
                                        },

                                    }} primary={subItem.label} />
                                </ListItemButton>
                            ))}
                        </>
                        // </List>
                    )) : props.menus.map((iconMenu: IMenuList) =>
                        <>
                            <div style={{
                                display: 'flex',
                                flexDirection: "row",
                                alignItems: "center",
                                width: '5vh',
                                height: "5vh",
                                justifyContent: "center",

                            }}><DefaultIcon /></div>
                            {iconMenu.childMenus.map((item: IChildMenuList) =>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: '5vh',
                                    height: "5vh",
                                    justifyContent: "center",

                                }}>{item.icon || <DefaultIcon />}</div>
                            )}
                        </>
                    )}
                </List>
            </Stack>
        </StyledDrawer>
    );
};

export default SideBar;
