import { IconButton } from "@mui/material";
import React, { FC, ReactNode } from "react";

interface ISettings {
  onClick?: React.MouseEvent<MouseEvent> | any;
  sx?: any;
  icon: string | undefined;
  settingsComponent?: ReactNode | ReactNode[];
  settingsOnCLick?: any;
}

const MesSettings: FC<ISettings> = ({
  sx,
  icon,
  settingsComponent,
  settingsOnCLick,
}) => {
  return (
    <>
      <IconButton
        disableRipple
        style={{ padding: 0 }}
        sx={sx}
        onClick={settingsOnCLick}
      >
        <img src={icon} style={{ height: "2vh" }} />
      </IconButton>
      {settingsComponent}
    </>
  );
};

export default MesSettings;
