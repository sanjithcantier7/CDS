import React from "react";
import CdsDropDown from "../CdsDropDown";

type Props = {};

const CdsDropDownExample = (props: Props) => {
  const options = [
    { id: "1", label: "Red" },
    { id: "2", label: "Blue" },
    { id: "3", label: "Green" },
  ];

  return <CdsDropDown label="Choose a color" options={options} />;
};

export default CdsDropDownExample;
