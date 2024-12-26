import { Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  noPadding?: boolean;
}
const MesTabPanel = (props: TabPanelProps) => {
  const { children, value, index, noPadding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={
        {
          // border: "1px solid red",
        }
      }
    >
      {value === index && <Box pt={noPadding ? 0 : 2}>{children}</Box>}
    </div>
  );
};
export default MesTabPanel;
