import React, { FC } from "react";
import {
  // Grid2,
  TextField as MuiTextField,
  Paper,
  Stack,
  TextFieldProps,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import styled from "styled-components";

type ITextFieldProps = TextFieldProps & {
  width?: string | number | undefined;
};

const TextField: FC<ITextFieldProps> = (props: ITextFieldProps) => {
  return (
    <Stack sx={{ width: props.width || "100%" }}>
      <MuiTextField
        {...props}
        variant="outlined"
        slotProps={{
          inputLabel: {
            shrink: true,
            style: {
              visibility: "visible",
              position: "absolute",
              top: "-15px",
              // marginTop: -15,
              fontWeight: 700,
              fontSize: 20,
            },
          },
        }}
        sx={[
          {
            borderRadius: "5px",
            // backgroundColor: "red",
            width: props.width || "100%",
            height: "80",
            // minWidth: "20vw",
            // m:2,
            ".MuiOutlinedInput-notchedOutline": {
              border: "unset",
            },
            "& .MuiInputBase-root .MuiOutlinedInput-root": {
              borderRadius: "15px",
              px: 1,
            },
            "& .MuiFormLabel-asterisk": {
              color: "red",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "#F7F7F7",
              p: 0,
              height: "50px",
            },
            "& .MuiInputBase-input": {
              fontSize: 18,
              color: "#454545",
              textTransform: "capitalize",
            },
            "& .MuiInputLabel-root": {
              color: "#454545", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#002856", // Label color when focused
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#00476d", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#002856", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#002856", // Border color when focused
              },
            },
            "& .MuiFormHelperText-root": {
              ml: "4px",
            },
          },
        ]}
      />
    </Stack>
  );
};

export default TextField;
