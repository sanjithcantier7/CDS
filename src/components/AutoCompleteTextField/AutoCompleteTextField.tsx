import { Autocomplete, Stack, TextField } from "@mui/material";
import { FC, useEffect } from "react";

type option = {
  title: string;
};

interface IAutoCompleteTextField {
  options: string[];
  value?: string;
  label: string;
  onChange?: any;
  inputValue?: any;
  onInputChange?: any;
  defaultValue?: any;
  autoFocus?: boolean;
  autoComplete?: string | undefined;
  inputRef?: any | undefined;
  placeholder?: string;
  width?: number | string;
  fullWidth?: boolean;
}

const AutoCompleteTextField: FC<IAutoCompleteTextField> = ({
  options,
  label,
  placeholder,
  value,
  width,
  onChange,
  onInputChange,
  inputValue,
  defaultValue,
  autoFocus,
  autoComplete,
  inputRef,
  fullWidth,
}) => {
  useEffect(() => {
    console.log = console.warn = console.error = () => {};
  }, []);

  return (
    <Autocomplete
      //   freeSolo
      value={value}
      onChange={onChange}
      options={options}
      inputValue={inputValue}
      onInputChange={onInputChange}
      fullWidth={fullWidth}
      sx={{
        ".MuiAutocomplete-clearIndicator": {
          visibility: value ? "visible" : "hidden",
        },
        ".MuiAutocomplete-popupIndicator": {
          visibility: "hidden",
          marginRight: -3,
        },
      }}
      renderInput={(params) => (
        <TextField
          placeholder={placeholder}
          label={label}
          {...params}
          sx={{
            borderRadius: "5px",
            width: width || "100%",
            backgroundColor: "#FFFFFF",
            ".MuiOutlinedInput-notchedOutline": {
              border: "unset",
            },
            "& .MuiInputBase-root .MuiOutlinedInput-root": {
              borderRadius: "15px",
              px: 1,
            },
            "& .MuiFormLabel-asterisk": {
              color: "red",
              zIndex: 0,
            },
            "& .MuiInputBase-root": {
              //   backgroundColor: "#FFF",
              p: 0,
              height: "50px",
              border: "1px solid #E4E4E4",
            },
            "& .MuiInputBase-input": {
              color: "#BCBCBC",
              fontSize: 15,
              paddingLeft: 2,
              textTransform: "unset",
              "&:hover": {
                color: "#454545",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#9A9999", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#002856", // Label color when focused
            },
            "& .MuiFormHelperText-root": {
              ml: "4px",
            },
          }}
          variant="outlined"
          slotProps={{
            inputLabel: {
              shrink: true,
              style: {
                visibility: "visible",
                position: "absolute",
                top: "-15px",
                zIndex: 0,
                // marginTop: -15,
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: 0.5,
              },
            },
          }}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          inputRef={inputRef}
        />
      )}
    />
  );
};

export default AutoCompleteTextField;
