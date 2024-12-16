import { Button, Icon, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode, useEffect } from "react";
interface ITopBarButton {
  label?: string;
  icon: ReactNode | string | ReactNode[] | JSX.Element | Element | any;
}

const TopBarButton: FC<ITopBarButton> = ({ icon, label }) => {
  useEffect(() => {
    console.log = console.warn = console.error = () => { };
  }, []);
  return (
    <Button sx={{ m: 0, pt: "3px", pb: "2px", gap: "7px" }} key={label}>
      {icon}
      <Typography
        sx={{
          color: "#fff",
          fontSize: "18px",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        {label}
      </Typography>
    </Button>
  );
};

export default TopBarButton;
