import React, { useState } from "react";
import CdsAutoComplete from "../CdsAutoComplete";

type Props = {};

const CdsAutoCompleteExample = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const sampleOptions = [
    {
      id: "1",
      label: "Option 1",
    },
    {
      id: "2",
      label: "Option 2",
    },
    {
      id: "3",
      label: "Option 3",
    },
    {
      id: "4",
      label: "Option 4",
    },
    {
      id: "5",
      label: "Option 5",
    },
  ];

  const handleAutoCompleteChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedValue(event.target.value);
  };

  return (
    <CdsAutoComplete
      label="Select an option"
      options={sampleOptions}
      size="medium"
      onChange={handleAutoCompleteChange}
    />
  );
};

export default CdsAutoCompleteExample;
