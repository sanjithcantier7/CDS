import React from "react";
import "./index.css";
import Example from "./components/SideBar/__docs__/Example";
import { TopBar } from "./components";

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <div>
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
