import React, { StrictMode, useState } from "react";
import TextField from "../TextField";
import { Grid2, Stack, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "red",
  padding: 0,
  textAlign: "center",
}));

const Example = () => {
  const [text, settext] = useState("");
  return (
    <Stack spacing={3} direction={"row"} sx={{ alignItems: "center" }}>
      <TextField
        label={"Default"}
        value={text}
        onChange={(e: any) => settext(e.target.value)}
        required
        width={200}
        sx={{ border: "1px solid red" }}
      />
      <TextField
        label={"Default Error"}
        value={text}
        onChange={(e: any) => settext(e.target.value)}
        required
        error
        helperText={"Error Hint"}
        width={200}
      />
      <TextField
        label={"Default Error Helper"}
        value={text}
        onChange={(e: any) => settext(e.target.value)}
        required
        helperText={"Required Hint"}
        width={200}
      />
      <TextField
        label={"Default Date"}
        type="date"
        value={text}
        onChange={(e: any) => settext(e.target.value)}
        required
        width={200}
      />

      <TextField
        label={"Default Password"}
        type="password"
        value={text}
        onChange={(e: any) => settext(e.target.value)}
        required
        width={200}
      />
    </Stack>
  );
};

export default Example;
