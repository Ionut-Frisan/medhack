import React from "react";

const DynamicComponent = ({ is, props = {} }) => {
  // component does exist
  if (typeof is !== "undefined") {
    return React.createElement(is, props);
  }
  // component doesn't exist yet
  return React.createElement(() => <></>);
};

export default DynamicComponent;
