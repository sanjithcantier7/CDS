import { FC, ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import { Box, Stack } from "@mui/material";

interface IMesTabs {
  children: ReactNode | ReactNode[] | JSX.Element;
}

const MesTabs: FC<IMesTabs> = ({ children }) => {
  return (
    <Stack
      sx={{
        m:0,
        mt:-10,
        p: 0,
        display: "flex",
        flexDirection: "row",
        backgroundColor:"#fff"
        // border: "1px solid red",
      }}
    >
      <Tabs
        orientation={"horizontal"}
        sx={{
          //   boxShadow: "0px 0.5px 18px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#FFF",

        }}
      >
        {children}
      </Tabs>
      <Box sx={{ flexGrow: 1, backgroundColor: "#FAFAFA" }} />
    </Stack>
  );
};

export default MesTabs;
