import React from "react";
import "./index.css";
import Example from "./components/SideBar/__docs__/Example";
import { TitleBar, TopBar } from "./components";

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <div>
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
        // moduleOnclick={handleModuleClick}
      />
      <TopBar
        open={false}
        // leftComponents={ }
        // RightComponents={

        // }
      />
      <Example />
    </div>
  );
};

export default App;
