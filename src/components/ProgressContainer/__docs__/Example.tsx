import React from "react";
import ProgressContainer from "../ProgressContainer";
import MesTabs from "../../MesTabs";
import MesTab from "../../MesTab";

const Example = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ProgressContainer
      variant={"tabs"}
      label={"Factory Setup"}
      description={"Skills"}
    >
      <MesTabs>
        {/* parts */}
        <MesTab
          label={"Parts"}
          index={0}
          value={value}
          onClick={handleChange}
          disabled
        />
        {/* tools */}
        <MesTab
          label={"Tools"}
          index={1}
          value={value}
          onClick={handleChange}
        />
      </MesTabs>
    </ProgressContainer>
  );
};

export default Example;
