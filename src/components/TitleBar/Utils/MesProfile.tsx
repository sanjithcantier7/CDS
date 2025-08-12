import {
  Avatar,
  Divider,
  MenuItem,
  Tooltip,
  Typography,
  Menu,
  IconButton,
  Stack,
  ListItemIcon,
  Box,
} from "@mui/material";
import React, { FC, ReactNode, useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logout } from "@mui/icons-material";

const textStyle = {
  color: "#000",
  fontSize: "16px",
  py: 1.3,
  fontWeight: 500,
  letterSpacing: 0.5,
};

interface IMesProfile {
  src: ReactNode | any;
  borderColor?: string;
  sx?: any;
  size?: string;
  tooltiptitle?: string;
  username?: string;
  role?: string;
  logoutOnClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | any;
}
const MesProfile: FC<IMesProfile> = ({
  src,
  tooltiptitle,
  borderColor,
  sx,
  size,
  logoutOnClick,
  username,
  role,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    ""
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const stringToColour = (str: string) => {
    let hash = 0;
    str.split("").forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += value.toString(16).padStart(2, "0");
    }
    return colour;
  };

  useEffect(() => {
    if (username) {
      setBackgroundColor(
        stringToColour(username?.replace(/[^a-zA-Z0-9]+/g, ""))
      );
    }
  }, [username]);

  return (
    <React.Fragment>
      <Tooltip title={tooltiptitle || "profile"} arrow>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: "0.2vh" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            variant="circular"
            // src={src}
            alt={"#"}
            style={{
              width: size ? size : "3vh",
              height: size ? size : "3vh",
              border: `0.2vh solid ${borderColor ?? "#cecece"}`,
              backgroundColor: backgroundColor,
              textTransform: "capitalize",
              fontSize: "2vh",
            }}
            sx={sx}
          >
            {(username && username?.replace(/[^a-zA-Z0-9]+/g, "")[0]) || "A"}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          width: "27.5vh",
          ".MuiList-root": {
            py: 0,
            borderBottom: "0.2vh solid #002856",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          ".MuiPaper-root": {
            borderBottom: "0.2vh solid #002856",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: "0.15vh",
              "& .MuiAvatar-root": {
                width: "3.2vw",
                height: "3.2vh",
                ml: "-0.05vh",
                mr: "0.1vh",
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: "1vh",
                height: "1vh",
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ py: "0.14vh", width: "27.5vh" }}>
          <Avatar
            // src={src}
            style={{
              width: "2.9vh",
              height: "2.9vh",
              border: `0.2vh solid ${borderColor ?? "#cecece"}`,
              backgroundColor: backgroundColor,
              textTransform: "capitalize",
              fontSize: "2vh",
            }}
          >
            {(username && username?.replace(/[^a-zA-Z0-9]+/g, "")[0]) || "A"}
          </Avatar>
          <Stack>
            <Typography
              sx={{
                fontWeight: 600,
                textTransform: "capitalize",
              }}
              fontSize={{ md: "1rem", lg: "0.8rem", xl: "0.6rem" }}
            >
              {username || "Username"}
            </Typography>
            <Typography sx={{ fontWeight: 300 }} fontSize={"0.625rem"}>
              {role || "Role"}
            </Typography>
          </Stack>
        </MenuItem>
        <Box sx={{ borderBottom: 1, color: "#E0E0E0" }} />
        <MenuItem onClick={logoutOnClick} sx={textStyle} disabled>
          Edit Profile
        </MenuItem>
        <MenuItem onClick={logoutOnClick} sx={textStyle} disabled>
          Add Another Account
        </MenuItem>
        <Box sx={{ borderBottom: 1, color: "#E0E0E0" }} />
        <MenuItem onClick={logoutOnClick} sx={textStyle}>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default MesProfile;
