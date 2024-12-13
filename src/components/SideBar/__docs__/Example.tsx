import React, { FC, ReactNode, useState } from "react";
import SideBar from "../SideBar";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";




const exampleData = [
    {
        id: 1,
        color: "",
        bgColor: "",
        label: "Process",
        childMenus: [
            {
                id: 1,
                onClick: () => { },
                color: "",
                bgColor: "",
                label: "Final Mixer Process",
                icon: undefined,
                hoverIcon: undefined,
                activeIcon: undefined,
                isActive: false,
            },
            {
                id: 2,
                onClick: () => { },
                color: "",
                bgColor: "",
                label: "Extruder",
                icon: undefined,
                hoverIcon: undefined,
                activeIcon: undefined,
                isActive: false,
            },
        ],
    },
];

// const Menus: JSX.Element = (
//     <>
//         {menus.map((item: IMenuList, index: number) => (
//             <List key={index}>
//                 <ListItem key={item.id} disablePadding>
//                     <ListItemButton
//                         sx={{
//                             color: item.color || "#545454",
//                             bgcolor: item.bgColor || "#EAEAEA",
//                             fontWeight: 700,
//                             "&:hover": { backgroundColor: "#EAEAEA" },
//                             cursor: "pointer",
//                         }}
//                         disableRipple
//                         disableTouchRipple
//                     >
//                         <ListItemText
//                             primary={item.label}
//                             sx={{
//                                 ".MuiTypography-root": {
//                                     fontWeight: 800,
//                                     letterSpacing: 0.2,
//                                 },
//                             }}
//                         />
//                     </ListItemButton>
//                 </ListItem>
//                 {item.childMenus.map((subItem: IChildMenuList, index: number) => (
//                     <ListItemButton
//                         onClick={subItem.onClick}
//                         sx={{
//                             color: subItem.color || "#545454",
//                             bgcolor: subItem.bgColor || "#EAEAEA",
//                             ".MuiTypography-root": {
//                                 ":hover": {
//                                     fontWeight: 800,
//                                 },
//                                 fontWeight: subItem.isActive ? 800 : 500,
//                                 letterSpacing: 0.2
//                             },
//                             "&:hover": { color: "#002856" },
//                             "&:active": {
//                                 bgcolor: subItem.isActive ? "#DFDFDF" : "#EAEAEA",
//                                 color: subItem.isActive
//                                     ? "#002856"
//                                     : subItem.bgColor || "#002856",
//                             },
//                             cursor: "pointer",
//                         }}
//                         disableRipple
//                         disableTouchRipple
//                     >
//                         <ListItemIcon>{subItem.icon || <DefaultIcon />}</ListItemIcon>
//                         <ListItemText primary={subItem.label} />
//                     </ListItemButton>
//                 ))}
//             </List>
//         ))}
//     </>
// );

const Example = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div>
            <SideBar
                open={sideBarOpen}
                onClose={() => setSideBarOpen(false)}
                onClick={() => setSideBarOpen((prev) => !prev)}
                menus={exampleData}
            />
        </div>
    );
};

export default Example;
