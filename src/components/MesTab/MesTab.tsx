import { Typography, Tab, TabProps, styled } from "@mui/material";
import { FC } from "react";

interface IMesTab extends Omit<TabProps, "onClick" | "label"> {
  label: string;
  index: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, index: number) => void;
  value: number;
  disabled?: boolean
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const StyledTab = styled(Tab)(({ theme }) => ({
  alignItems: "flex-start",
  borderColor: "#FFF",
  textTransform: "none",
  backgroundColor: "#fff",
  minWidth: "0px",
  borderRadius: 0,
  lineHeight: -10,
  elevation: 0,
  boxShadow: theme.shadows[0],
  transition: "all 0.2s ease-in-out",
  "&.Mui-selected, &:hover": {
    backgroundColor: "#fff",
    color: "#4376AF",
    boxShadow: theme.shadows[0],
  },
}));

const MesTab: FC<IMesTab> = ({ label, onClick, index, value, disabled, ...rest }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event, index);
    }
  };

  return (
    // <StyledTab
    //   label={label}
    //   disableRipple
    //   onClick={handleClick}
    //   {...a11yProps(index)}
    //   {...rest} // Spread any additional TabProps
    // style={{
    //   // height: "5vh",
    //   // fontSize: "2.2vh",
    //   textAlign: "center",
    //   fontWeight: 600,
    //   letterSpacing: "0.1px",
    // }}
    //   sx={{
    //       padding: "0px",
    //       borderBottom: `4.5px solid ${value === index ? "#4376AF" : "#FFF"}`,
    //       ":hover": {
    //           backgroundColor: "#fff",
    //       },
    //     ":focus": {
    //       color: "#4376AF",
    //       backgroundColor: "#ffffff",
    //      },
    //   }}
    // sx={{
    //   textTransform: "capitalize",
    //   color: value === index ? "#000" : "#808080",
    //   backgroundColor: value === index ? "#FFF" : "#FFF",
    // padding: "10px",
    //     borderBottom: `0.2vh solid ${value === index ? "#4376AF" : "#D1D1D1"}`,
    //   ":hover": {
    //     backgroundColor: "#fff",
    //   },
    //   ":focus": {
    //     color: "#4376AF",
    //     backgroundColor: "#ffffff",
    //     borderBottom: `0.3vh solid #4376AF`,
    //   },
    // }}
    // />
    <Typography
      style={{
        // height: "5vh",
        fontSize: "1.8vh",
        textAlign: "center",
        fontWeight: 600,
        letterSpacing: "0.1px",
      }}
      onClick={disabled ? handleClick : () => { }}
      {...a11yProps(index)}
      {...rest}
      sx={{
        cursor: "default",
        mx: 1,
        mt: 4,
        opacity: disabled ? 0.4 : 1,
        textTransform: "capitalize",
        color: value === index ? "#4376AF" : "#808080",
        backgroundColor: value === index ? "#FFF" : "#FFF",
        px: "1px",
        borderBottom: `0.4vh solid ${value === index ? "#4376AF" : "#FFF"}`,
        ":hover": {
          backgroundColor: "#fff",
        },
        ":focus": {
          color: "#4376AF",
          backgroundColor: "#ffffff",
        },
      }}
    >
      {label}
    </Typography>
  );
};

export default MesTab;
