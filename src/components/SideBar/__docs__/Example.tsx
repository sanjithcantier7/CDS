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


 const MasterDataSideNavData = [
  {
    id: 1,
    color: "",
    bgColor: "",
    label: "Master Data",
    childMenus: [
      {
        id: 1,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Employees",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 2,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Item Categories",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 3,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Item Subcategories",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 4,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Item Master",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 5,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Accounts",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
    ],
  },
  {
    id: 2,
    color: "",
    bgColor: "",
    label: "Factory Setup",
    childMenus: [
      {
        id: 6,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Shifts",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 7,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Work Centers",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 8,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Skills",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 9,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Skillsets",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 10,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Tool Groups",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 11,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Tools",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 12,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Equipment Groups",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 13,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Equipment",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 14,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Equipment Priority",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 15,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Processes",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 16,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Production Lines",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
    ],
  },
  {
    id: 3,
    color: "",
    bgColor: "",
    label: "Production Configuration",
    childMenus: [
      {
        id: 17,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Manufacturing Route",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 18,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Bill Of Materials",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
      {
        id: 19,
        onClick: () => {},
        color: "",
        bgColor: "",
        label: "Product Spec",
        icon: undefined,
        hoverIcon: undefined,
        activeIcon: undefined,
        isActive: false,
      },
    ],
  },
];

const Example = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div>
            <SideBar
                open={sideBarOpen}
                onClose={() => setSideBarOpen(false)}
                onClick={() => setSideBarOpen((prev) => !prev)}
                menus={MasterDataSideNavData}
            />
        </div>
    );
};

export default Example;
