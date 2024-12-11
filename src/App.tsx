import React from "react";
import { SideBar, TitleBar } from "./components";
import "./index.css";
import Sample from "./components/Sample/Sample";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Sample />
    </div>
  );
};

export default App;
