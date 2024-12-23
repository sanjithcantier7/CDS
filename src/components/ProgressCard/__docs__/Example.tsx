import React from "react";
import ProgressCard from "../ProgressCard";
import Add from "@mui/icons-material/AbcSharp";
const Example = () => {
  return (
    <>
      <ProgressCard
        status={"Active"}
        statusItems={0}
        bgColor="yellowgreen"
        icon={<Add />}
      />
    </>
  );
};

export default Example;
