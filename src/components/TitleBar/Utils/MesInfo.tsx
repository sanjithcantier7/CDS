import { IconButton } from "@mui/material";
import React, { FC } from "react";

interface IInfo {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon: string | undefined;
  sx?: any;
}

const MesInfo: FC<IInfo> = ({ icon, onClick, sx }) => {
  return (
    <IconButton disableRipple onClick={onClick} style={{ padding: 0 }} sx={sx}>
      <img src={icon} style={{ height: "2vh" }} />
    </IconButton>
  );
};

export default MesInfo;
