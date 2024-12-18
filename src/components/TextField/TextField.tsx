import React, { FC } from 'react'
import { TextField as MuiTextField, Stack, TextFieldProps } from "@mui/material"


type ITextFieldProps = TextFieldProps & {
    width?: string | number | undefined
};

const TextField: FC<ITextFieldProps> = (props: ITextFieldProps) => {
    return (
        <MuiTextField {...props}
            variant="outlined"
            slotProps={{
                inputLabel: {
                    shrink: true,
                    style: {
                        visibility: "visible",
                        position: 'absolute',
                        top: '-15px',
                        fontWeight: 700,
                        fontSize: 20
                    },
                },

            }}
            sx={{
                borderRadius: "5px",
                width: props.width ?? "20vw",
                backgroundColor: "#F7F7F7",
                ".MuiOutlinedInput-notchedOutline": {
                    border: "unset",
                },
                "& .MuiInputBase-root .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                    px: 1,
                },
                "& .MuiFormLabel-asterisk": {
                    color: 'red'
                },
                "& .MuiInputBase-root": {
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
            }}
        />
    )
}

export default TextField
