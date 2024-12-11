import React from "react";
import TitleBar from "../TitleBar";
import SideBar from "../SideBar";

interface Props {}

const Sample: React.FC<Props> = () => {
  const onClose = () => {
    console.log("Sidebar closed");
  };

  const handleSidebarClick = () => {
    console.log("Sidebar item clicked");
  };
  return (
    <div>
      CDS
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
        moduleOnclick={() => {}}
        home={false}
      />
      <SideBar
        menus={[""]}
        open={true}
        onClick={handleSidebarClick}
        onClose={onClose}
      />
    </div>
  );
};

export default Sample;
