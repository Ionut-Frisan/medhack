import { useState } from "react";
import MedButton from "../button/MedButton.jsx";

import "./TabView.scss";

const TabView = ({ children, activeTab }) => {
  const tabs = Array.isArray(children)
    ? children?.filter?.((child) => child?.type?.name === "TabPanel") || []
    : children?.type?.name === "TabPanel"
    ? [children]
    : [];
    
  console.log(tabs);

  const headerButtons = tabs.map((tab) => tab.props?.title || "");
  const activeTabComputed =
    headerButtons.indexOf(activeTab) > -1
      ? headerButtons.indexOf(activeTab)
      : 0;

  const [selectedTab, setSelectedTab] = useState(activeTabComputed);

  return (
    <div className="med-tabs">
      <ul className="med-tabs__header">
        {headerButtons.map((title, index) => {
          return (
            <MedButton
              onClick={() => setSelectedTab(index)}
              label={title}
              variant="plain"
              customClass={selectedTab === index ? "active" : ""}
              key={index}
              startIcon={tabs[index]?.props?.icon}
            ></MedButton>
          );
        })}
      </ul>
      <div className={"med-tabs__content"}>
        {tabs.map((tab, index) => {
          if (index === selectedTab) {
            return tab;
          }
        })}
      </div>
    </div>
  );
};

export default TabView;
