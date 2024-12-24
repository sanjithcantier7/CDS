import React from "react";
import Button from "./Button";
import MesInfoIcon from "../Button/ViewLogIcon.svg";

const Example = () => {
  return (
    <div className="App">
      <Button
        style={{ margin: "10px" }}
        variant="standard"
        label="Primary"
        onClick={() => console.log("Invalid Click!")}
        size="small"
      />
      <Button
        variant="standard"
        style={{ margin: "10px" }}
        label="Cancel" 
        onClick={() => console.log("Invalid Click!")}
        size="medium"
      />
      <Button
        style={{ margin: "10px" }}
        label="Cancel"
        variant="standard"
        onClick={() => console.log("Invalid Click!")}
        size="large"
      />

      <Button
        style={{ margin: "10px" }}
        icon={<MesInfoIcon />}
        variant="custom"
        label="Edit"
        onClick={() => {}}
        size="small"
      />
      <Button
        style={{ margin: "10px" }}
        icon={<MesInfoIcon />}
        variant="custom"
        label="View Log"
        onClick={() => {}}
        size="medium"
      />
      <Button
        icon={<MesInfoIcon />}
        variant="custom"
        label="View Log"
        onClick={() => {}}
        size="large"
      />
    </div>
  );
};

export default Example;
