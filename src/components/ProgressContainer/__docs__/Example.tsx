import React from "react";
import ProgressContainer from "../ProgressContainer";

const Example = () => {
  return (
    <ProgressContainer
      variant={"standard"}
      label={"Factory Setup"}
      description={"Skills"}
    >
      <div>children</div>
    </ProgressContainer>
  );
};

export default Example;
