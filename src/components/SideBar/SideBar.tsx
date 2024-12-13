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
            <Stack sx={{ alignItem: "flex-start", backgroundColor: "#c0c0c0" }}>
                <IconButton
                    sx={{
                        backgroundColor: "#c0c0c0",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 0,
                        height: "5vh",
                        width: "5vh",
                    }}
                    disableRipple
                    onClick={props.onClick}
                >
                    <SideBarIcon />
                </IconButton>
                <List disablePadding sx={{ p: 0, bgcolor: props.bgColor || "#EAEAEA" }}>
                    {props.open ? props.menus.map((item: IMenuList, index: number) => (
                        <List key={index}>
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton
                                    sx={{
                                        color: item.color || "#545454",
                                        bgcolor: item.bgColor || "#EAEAEA",
                                        fontWeight: 700,
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
                                                letterSpacing: 0.2,
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            {item.childMenus.map((subItem: IChildMenuList, index: number) => (
                                <ListItemButton
                                    
                                    onClick={subItem.onClick}
                                    sx={{
                                        color: subItem.color || "#545454",
                                        bgcolor: subItem.bgColor || "#EAEAEA",
                                        ".MuiTypography-root": {
                                            ":hover": {
                                                fontWeight: 800,
                                            },
                                            fontWeight: subItem.isActive ? 800 : 500,
                                            letterSpacing: 0.2
                                        },
                                        "&:hover": { color: "#002856" },
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
                                    <ListItemIcon>{subItem.icon || <DefaultIcon />}</ListItemIcon>
                                    <ListItemText primary={subItem.label} />
                                </ListItemButton>
                            ))}
                        </List>

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
