import styled from "@emotion/styled";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { FC, ReactNode, useEffect, useState } from "react";
import TopBarButton from "./Utils/TopBarButton";

/**
 * Represents a custom top bar component for a web application.
 * This component displays a top bar with buttons, search input, and filter options.
 *
 * @component
 *
 * @param {Object} props - The props for the `MesTopBar` component.
 * @param {listButtons[]} props.listButtons - An array of button objects, each containing a label and an icon.
 * @param {string|number|any} props.searchValue - The current value of the search input.
 * @param {React.ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>|undefined} props.searchOnChange - A function to handle search input changes.
 * @param {boolean} props.filterPanel - Indicates whether the filter panel is enabled.
 *
 * @returns {JSX.Element} The `MesTopBar` component with buttons and search functionality.
 *
 * <MesTopBar
 *     listButtons={[
 *      { label: "new", icon: <AddIcon /> },
 *      { label: "check JO", icon: <AddIcon /> },
 *      { icon: <MoreIcon /> },
 *  ]}
 *  searchValue={search}
 *  searchOnChange={(e) => setSearch(e.target.value)}
 *  filterPanel={true}
 *    />
 *
 */

const CustomTopbar = styled(AppBar)(({ theme }) => ({
  zIndex: 1,
}));

type listButtons = {
  label?: string;
  icon: ReactNode | string | Node;
};

interface ITopBar {
  open: boolean;
  leftComponents?: ReactNode | JSX.Element | ReactNode[] | JSX.Element[];
  RightComponents?: ReactNode | JSX.Element | ReactNode[] | JSX.Element[];
}
                                                                                                                    
const TopBar: FC<ITopBar> = ({
  leftComponents,
  RightComponents,
  open,
}) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(open);

  const appBarStyles = {
    width: open ? "calc(100% - 28vh)" : "calc(100% - 5vh)", // Adjust the height as needed
    transition: "width 1.5s ease", // Add a transition effect for a smoother change
  };
  useEffect(() => {
    console.log = console.warn = console.error = () => { };
  }, []);
  return (
    <CustomTopbar
      sx={{
        position: "fixed",
        backgroundColor: "#4376AF",
        boxShadow: "none",
        marginTop: "5vh",
        // width: "100%",
        paddingLeft: "20px",
        height: "5vh",
        justifyContent: "center",
      }}
      style={appBarStyles}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "5vh" }}>
          {/* {listButtons?.map((button) => (
            <MesTopBarButton
              key={button.label}
              icon={button.icon}
              label={button.label}
            />
          ))} */}
          {leftComponents}
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ display: "flex", flexDirection: "row", mr: 7 }}>
          {/* <MesSearchModule
            value={searchValue}
            onChange={searchOnChange}
            filterPanel={filterPanel}
          /> */}
          {RightComponents}
        </Box>
      </Stack>
    </CustomTopbar>
  );
};

export default TopBar;
