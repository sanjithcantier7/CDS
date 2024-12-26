import { Tab, TabProps } from "@mui/material";
import { FC } from "react";

interface IMesTab extends Omit<TabProps, "onClick" | "label"> {
  label: string;
  index: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, index: number) => void;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const MesTab: FC<IMesTab> = ({ label, onClick, index, value, ...rest }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event, index);
    }
  };

  return (
    <Tab
      label={label}
      disableRipple
      onClick={handleClick}
      {...a11yProps(index)}
      {...rest} // Spread any additional TabProps
      style={{
        height: "5vh",
        fontSize: "1.5vh",
        lineHeight: "20px",
        textAlign: "center",
        fontWeight: 600,
        letterSpacing: "0.1px",
      }}
      sx={{
        textTransform: "capitalize",
        color: value === index ? "#000" : "#808080",
        backgroundColor: value === index ? "#FFF" : "#FAFAFA",
        padding: "10px",
        borderBottom: `0.2vh solid ${value === index ? "#4376AF" : "#D1D1D1"}`,
        ":hover": {
          backgroundColor: "#fff",
        },
        ":focus": {
          color: "#000",
          backgroundColor: "#ffffff",
          borderBottom: `0.3vh solid #4376AF`,
        },
      }}
    />
  );
};

export default MesTab;
