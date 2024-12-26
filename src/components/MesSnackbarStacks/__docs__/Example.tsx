import { Button } from "@mui/material";
import MesSnackbarProvider from "../MesSnackbarProvider";
import useMesSnackbarContext from "../useMesSnackbarContext";

const Example = () => {
  return (
    <MesSnackbarProvider>
      <SnackBarCheck />
    </MesSnackbarProvider>
  );
};

const SnackBarCheck = () => {
  const { addSnack } = useMesSnackbarContext();
  return (
    <>
      <Button
        onClick={() =>
          addSnack("working...", "Snackbar heading", "success", 4000)
        }
      >
        SnackBar
      </Button>
    </>
  );
};

export default Example;
