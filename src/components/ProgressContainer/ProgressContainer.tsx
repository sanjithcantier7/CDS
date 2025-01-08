import { Box, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import ImageNA from "./assets/ImageNA.svg";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { SvgIconComponent } from "@mui/icons-material";

type IProgressContainerProps = {
  variant: "standard" | "tabs";
  icon?: any;
  label: string;
  description: string;
  children: ReactNode | ReactNode[];
};

const ProgressContainer: FC<IProgressContainerProps> = ({
  variant = "standard",
  icon,
  label,
  description,
  children,
}) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        pl: "3.3vh",
        pt: "4.1vh",
        pb: variant === "tabs" ? "1.5vh" : "3.3vh",
        pr: "3.3vh",
        backgroundColor: "#fff",
      }}
    >
      <Stack direction={"row"} spacing={"2vh"} alignItems={"center"}>
        <Box
          sx={{
            width: "7vh",
            height: "7vh",
            borderRadius: "50%",
            backgroundColor: "rgba(67, 118, 175, 0.35)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src={icon || ImageNA} style={{ height: "3.5vh" }} /> */}
          {icon || <ImageNA />}
        </Box>
        <Stack
          sx={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              // fontSize: "20px",
              // width: "318px",
              //   height: "26px",
              color: "#939393",
              fontWeight: 400,
              // border: "1px solid red",
            }}
            // fontSize={{ md: "1.5vh", xl: "1.5vh" }}
            fontSize={"1.75vh"}
          >
            {label || "No Label"}
          </Typography>
          <Typography
            sx={{
              // fontSize: "28px",
              //   height: "26px",
              color: "#5C5C5C",
              fontWeight: 550,
              // textTransform: "capitalize",
              // border: "1px solid red",
            }}
            // fontSize={{ md: "2vh", xl: "2vh" }}
            fontSize={"2.7vh"}
          >
            {description || "No Description"}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          // height: "6vh",
          // border: "0.1vh solid blue",
          // flexGrow: "1",
          pt: "0.3vh",
        }}
        direction={"row"}
        spacing={"2.4vh"}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default ProgressContainer;
