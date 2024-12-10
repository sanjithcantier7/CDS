import { IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface INotifications {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon: ReactNode | undefined;
  sx?: any;
}

const MesNotification: FC<INotifications> = ({ onClick, sx, icon }) => {
  return (
    <IconButton disableRipple onClick={onClick} style={{ padding: 0 }} sx={sx}>
      {/* <img src={icon} style={{ height: "2vh" }} /> */}
      {icon}
    </IconButton>
  );
};

export default MesNotification;
