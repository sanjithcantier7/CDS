import { Icon, IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface IMesLogo {
  onClick?: React.MouseEvent<MouseEvent> | any;
  icon: ReactNode | JSX.Element | any;
  sx?: any;
}

const MesLogo: FC<IMesLogo> = ({ onClick, sx, icon }) => {
  return (
    <Icon
      onClick={onClick}
      style={{
        padding: 0,
        height: "3.3vh",
        minHeight: "3.3vh",
        maxHeight: "3.3vh",
      }}
      sx={[sx, { mx: 1 }]}
    >
      <img src={icon} />
    </Icon>
  );
};

export default MesLogo;
