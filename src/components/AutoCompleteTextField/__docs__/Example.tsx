import React, { useEffect } from "react";
import AutoCompleteTextField from "../AutoCompleteTextField";

const Example = () => {
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div style={{ width: "50vh", marginLeft: 7 }}>
      <AutoCompleteTextField
        value={inputValue}
        onChange={(event: any, newValue: string) => setInputValue(newValue)}
        inputValue={inputValue}
        onInputChange={(event: any, newvalue: any) => setInputValue(newvalue)}
        options={["hello", "sanjith", "hari", "logesh"]}
        label={"Autocomplete Textfield"}
        placeholder="Enter Query"
      />
    </div>
  );
};

export default Example;
