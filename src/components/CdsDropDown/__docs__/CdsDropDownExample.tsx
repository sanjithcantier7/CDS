import React from "react";
import CdsDropDown from "../CdsDropDown";
import withFluentProvider from "../../../hoc/FluentProviderHOC";

const CdsDropDownExample = () => {
  const options = [
    { id: "1", label: "Red" },
    { id: "2", label: "Blue" },
    { id: "3", label: "Green" },
  ];

  return <CdsDropDown label="Choose a color" options={options} />;
};

export default withFluentProvider(CdsDropDownExample);
