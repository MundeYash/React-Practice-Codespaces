import React from "react";
import Tabs from "./TabsComponent";

const TabsComponentHelper = () => {
  const tabs = [
    {
      id: "home",
      label: "Home",
      content: <div>Welcome to the Home tab.</div>,
    },
    {
      id: "profile",
      label: "Profile",
      content: <div>This is your profile section.</div>,
    },
    {
      id: "settings",
      label: "Settings",
      content: <div>Adjust your settings here.</div>,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsComponentHelper;
