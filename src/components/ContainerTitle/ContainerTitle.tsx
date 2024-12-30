import { FC } from "react";
import ImageNA from "../../assets/ImageNA.svg";
import { Box, Stack, Typography } from "@mui/material";
interface IContainerTitle {
  icon: string;
  title: string | undefined;
}

const ContainerTitle: FC<IContainerTitle> = ({ icon, title }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"0.5vh"}
      alignItems={"center"}
      // sx={{ border: "0.1vh solid red" }}
      bgcolor={"#fff"}
      justifyContent={"start"}
      pb={'1.5vh'}
    >
      <Box
        sx={{
          width: "2vh",
          height: "2vh",
          // border: "1px solid red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <img src={icon || ImageNA} style={{ height: "2vh" }} loading="lazy" />
      </Box>
      <Typography
        fontSize={"1.85vh"}
        fontWeight={600}
        sx={{
          textTransform: "uppercase",
          // border: "1px solid red",

          color: "#002856",
        }}
      >
        {title || "Title"}
      </Typography>
    </Stack>
  );
};

export default ContainerTitle;
