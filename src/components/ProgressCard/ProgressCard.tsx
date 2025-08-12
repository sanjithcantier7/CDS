import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { FC, ReactElement } from "react";
import IconNA from "./assets/ImageNA.svg";

interface IProgressCard {
  icon?: ReactElement | JSX.Element | undefined;
  bgColor?: string;
  status: string;
  statusItems: number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined | any;
}

const ProgressCard: FC<IProgressCard> = ({
  status,
  statusItems,
  onClick,
  icon,
  bgColor,
}) => {
  return (
    <Stack direction={"row"} spacing={"0.7vh"} sx={{ width: "9vw" }}>
      <Box
        sx={{
          width: "6vh",
          height: "6vh",
          backgroundColor:
            bgColor?.concat(" !important") || "#002856 !important",
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img src={icon || IconNA} alt="icon" style={{ height: "2vh" }} /> */}
        {icon}
      </Box>
      <Paper
        onClick={onClick}
        sx={{
          // width: "20vh",
          height: "6.7vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 0,
          alignContent: "flex-end",
          // marginRight: "2vh",
          // border: "1px solid red",
        }}
        elevation={0}
      >
        <Typography
          fontSize={"1.75vh"}
          sx={{
            textTransform: "capitalize",
            color: "#858585",
            fontWeight: 400,
          }}
        >
          {status}
        </Typography>
        <Typography
          fontSize={"2.5vh"}
          sx={{
            textAlign: "left",
            color: "#858585",
            fontWeight: 800,
            p: 0,
            m: 0,
          }}
        >
          {statusItems}
        </Typography>
      </Paper>
    </Stack>
  );
};

export default ProgressCard;
