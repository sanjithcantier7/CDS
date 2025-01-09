import React from "react";
import "./index.css";
import SideBar from "./components/SideBar/__docs__/Example";
import DataGrid from "./components/MesDataGrid/__docs__/Example";
import TextFieldComponent from "./components/TextField/__docs__/Example";
import ProgressContainerExample from "./components/ProgressContainer/__docs__/Example";
import ProgressCardExample from "./components/ProgressCard/__docs__/Example";
import { Stack, MesTitleBar, MesTopBar } from "./components";
import AutoCompleteExample from "./components/AutoCompleteTextField/__docs__/Example";
import Example from "./components/Dialogue/__docs__/Example";
import FilterComponent from "./components/MesDataGridFilter/__docs__/Example";
import SnackbarCheck from "./components/MesSnackbarStacks/__docs__/Example";
import ExampleProgressContainer from "./components/ProgressContainer/__docs__/Example";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <MesTitleBar
        version={"MES x.0"}
        notification
        info
        settings
        // moduleOnclick={handleModuleClick}K
      />

      <MesTopBar
        open={false}
        // leftComponents={ }
        // RightComponents={

        // }
      />
      <div
        style={{
          marginTop: "3vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          height: "90vh",
          backgroundColor: "#F8F7F6",
        }}
      >
        <SideBar />
        <Stack sx={{ width: "100%" }}>
          {/* Render Other components here */}
          {/* <h2>Progress container</h2> */}

          {/* <ExampleProgressContainer /> */}

          {/* Autocomplete */}
          <h2>Autocomplete</h2>
          <AutoCompleteExample />
          {/*  */}
          <h2>TextField</h2>
          {/* <TextFieldComponent /> */}
          <h2>MesDataGrid Component</h2>
          {/* <DataGrid /> */}
          <h2>MesDataGrid Filter</h2>
          {/* <FilterComponent /> */}
          {/* Dialogue Component */}
          <h2>Dialogue Component</h2>
          {/* <Example /> */}
          {/* <h2>Progress Container</h2> */}
          <ProgressContainerExample />
          {/* Progress Card */}
          <ProgressCardExample />

          {/* snackbar check */}
          <h2>SnackbarCheck</h2>
          {/* <SnackbarCheck /> */}
        </Stack>
      </div>
    </div>
  );
};

export default App;
