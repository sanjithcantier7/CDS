import {
  AppBar,
  IconButton,
  Stack,
  SxProps,
  Theme,
  Typography,
  styled,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
import MesInfo from "./Utils/MesInfo";
import MesNotification from "./Utils/MesNotification";
import MesSettings from "./Utils/MesSettings";
import MesProfile from "./Utils/MesProfile";
import MesModuleButton from "./Utils/MesModuleButton";
import HomeIcon from "@mui/icons-material/Home";
import MesLogo from "./Utils/MesLogo";
import SettingsIcon from "../../assets/MesSettings.svg";
import CantierIcon from "../../assets/Cantier.svg";
import MesInfoIcon from "../../assets/MesInfo.svg";
import NotificationIcon from "../../assets/MesNotification.svg";

export interface ITitleBar {
  version: string;
  profilePicture?: ReactNode;
  notification: boolean;
  settings: boolean;
  info: boolean;
  home: boolean;
  settingsComponent?: ReactNode;
  settingsOnCLick?:
  | React.MouseEventHandler<HTMLAnchorElement>
  | undefined
  | any;
  homeOnClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | any;
  moduleOnclick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | any;
  brandlogo?: string | any;
  brandlogoOnClick?:
  | React.MouseEventHandler<HTMLAnchorElement>
  | undefined
  | any;
  brandlogoSx?: SxProps<Theme> | undefined | any;
  profileProps?: any;
  profileLogoutOnClick?:
  | React.MouseEventHandler<HTMLAnchorElement>
  | undefined
  | any;
  profileTooltipTitle?: string;
  profileUserName?: string;
  profileRole?: string;
  profileBorderColor?: string;
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "#002856",
  boxShadow: "none",
  paddingRight: "1.1vh",
  // height: "50px",
  justifyContent: "center",
  zIndex: 1,
}));

const CantierIconVersion = (props: any) => {
  return (
    <Stack
      sx={{
        // border: "0.1vh solid red",
        height: "2.6vh",
        maxHeight: "2.6vh",
        textTransform: "capitalize",
        ml: "2.0vh",
      }}
      direction={"row"}
      alignItems={"center"}
      flexGrow={1}
      style={props.style}
    >
      {/* <CantierLogo /> */}
      <img src={CantierIcon} style={{ height: "3.6vh" }} />
      <Typography
        mt={"0.5vh"}
        // mt={{ md: "0.5vh", lg: "0.5vh", xl: "0.75vh" }}
        // fontSize={{ md: "1.2rem", lg: "1rem", xl: "0.6rem" }}
        fontSize={'2vh'}
        fontWeight={600}
        color="#fff"
      >
        {props.version}
      </Typography>
    </Stack>
  );
};

const Home: FC<{ homeOnClick: any }> = ({ homeOnClick }) => {
  return (
    <IconButton disableRipple onClick={homeOnClick} style={{ padding: 0 }}>
      <HomeIcon
        sx={{ color: "#FFFFFF", padding: 0 }}
        style={{ height: "2.5vh" }}
      />
    </IconButton>
  );
};

const TitleBar: FC<ITitleBar> = ({
  version,
  profilePicture,
  settingsComponent,
  settingsOnCLick,
  settings,
  info = false,
  notification,
  home,
  homeOnClick,
  moduleOnclick,
  brandlogo,
  brandlogoSx,
  brandlogoOnClick,
  profileLogoutOnClick,
  profileTooltipTitle,
  profileUserName,
  profileRole,
  profileBorderColor,
}) => {
  return (
    <CustomAppBar
      sx={{
        height: `5vh`,
      }}
    >
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <MesModuleButton onClick={moduleOnclick} />
        <CantierIconVersion version={version ?? "MES X.0"} />
        <Stack
          direction="row"
          style={{ zIndex: 9999 }}
          spacing={"2.88vh"}
          justifyContent={"center"}
        >
          {brandlogo && (
            <MesLogo
              onClick={brandlogoOnClick}
              sx={brandlogoSx}
              icon={brandlogo}
            />
          )}
          {info && <MesInfo icon={MesInfoIcon} />}
          {notification && <MesNotification icon={NotificationIcon} />}
          {home && <Home homeOnClick={homeOnClick} />}
          {settings && (
            <MesSettings
              icon={SettingsIcon}
              settingsComponent={settingsComponent}
              settingsOnCLick={settingsOnCLick}
            />
          )}
          <MesProfile
            src={profilePicture}
            logoutOnClick={profileLogoutOnClick}
            tooltiptitle={profileTooltipTitle}
            username={profileUserName}
            role={profileRole}
            borderColor={profileBorderColor}
          // sx={{ marginLeft: "16.24px" }}
          />
        </Stack>
      </Stack>
    </CustomAppBar>
  );
};

export default TitleBar;
