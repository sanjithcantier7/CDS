import { Drawer, Grid2, IconButton, Stack, Typography } from "@mui/material";
import React, { FC, MouseEventHandler, ReactNode, useState } from "react";
import closeIcon from "../../assets/MesNotification.svg";

interface Props {
  handleClose: MouseEventHandler<any> | undefined;
  open: boolean;
  onClose: () => void;
  children: ReactNode[] | ReactNode;
}
const ModuleDrawer: FC<Props> = ({ handleClose, open, onClose, children }) => {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          zIndex: 999999,
          mt: "5vh",
          width: "15vw",
          boxSizing: "border-box",
          backgroundColor: "#EAEAEA",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      transitionDuration={500}
    >
      <Stack
        height={"3.2vh"}
        sx={{ alignItems: "flex-end", justifyContent: "center" }}
      >
        <IconButton onClick={onClose}>
          <img
            alt="close-btn"
            style={{ height: "1.5vh", width: "1.5vh" }}
            src={closeIcon}
          />
        </IconButton>
      </Stack>
      <Stack height={"3.2vh"}></Stack>
      {/* <Grid2 container spacing={1} pt={'3.2vh'} sx={{ alignItem: 'center', justifyContent: 'center', }}> */}
      {children}
      {/* </Grid2> */}
    </Drawer>
  );
};

export default ModuleDrawer;
