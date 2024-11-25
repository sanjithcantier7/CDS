import { IconButton } from "@mui/material";
import React, { FC } from "react";
import ModuleIcon from "../../../assets/Module.svg";
interface IMesModuleButton {
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | any;
}
const MesModuleButton: FC<IMesModuleButton> = ({ onClick }) => {
  return (
    <IconButton
      sx={{
        width: "5vh",
        height: "5vh",
        borderRadius: 0,
        backgroundColor: "#F15D22",
        top: 0,
        left: 0,
        p: 0,
        "&:hover": {
          backgroundColor: "#F15D22",
          opacity: 0.95,
        },
      }}
      disableRipple
      onClick={onClick}
    >
      <img src={ModuleIcon} style={{ height: "2.5vh" }} />
    </IconButton>
  );
};

export default MesModuleButton;
