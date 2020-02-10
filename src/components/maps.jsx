import React from "react";
import Poi from "./poi";

const Maps = props => {
  console.log(props);
  return (
    <div className="content">
      <h1>Maps</h1>
      <Poi poi={props.poi} />
    </div>
  );
};

export default Maps;
