import React from "react";
import "./index.css";
import { CdsDropDown } from "./components";
import {
  FluentProvider,
  webLightTheme,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const App: React.FC = () => {
  const sampleOptions = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
  ];

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
      </div>
    </FluentProvider>
  );
};

export default App;
