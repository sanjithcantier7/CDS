import React, { useState } from "react";
import "./index.css";
import { CdsDropDown } from "./components";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import CdsAutoComplete from "./components/CdsAutoComplete/CdsAutoComplete";
import CdsAutoCompleteExample from "./components/CdsAutoComplete/__docs__/CdsAutoCompleteExample";
import CustomSliderForm from "./components/CdsSliderForm/CdsSliderForm";
import SliderForm from "./components/CdsSliderForm/CdsSliderForm";
import CdsTextField from "./components/CdsTextField/CdsTextField";

const App: React.FC = () => {
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

  const sdfsdptions = [
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
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleAutoCompleteChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedValue(event.target.value);
  };
  const [sliderValues, setSliderValues] = React.useState([
    { label: "Experience Level", value: 50 },
    { label: "Skill Proficiency", value: 70 },
    { label: "Project Completion", value: 30 },
  ]);

  const handleSliderChange = (index: number, newValue: number) => {
    setSliderValues((prev) =>
      prev.map((field, i) =>
        i === index ? { ...field, value: newValue } : field,
      ),
    );
  };

  const sliderFields = sliderValues.map((field, index) => ({
    ...field,
    onChange: (value: number) => handleSliderChange(index, value),
  }));
  return (
    <FluentProvider
      theme={{
        ...webLightTheme,
        colorCompoundBrandStroke: "#F15D22",
        colorCompoundBrandStrokeHover: "#F15D22",
      }}
    >
      <div>
        <CdsDropDown label="Select an option" options={sampleOptions} />
        <CdsAutoCompleteExample />
        <CdsTextField />
      </div>
    </FluentProvider>
  );
};

export default App;
