import React from "react";
import Poi from "./poi";

const Maps = props => {
  return (
    <div className="content">
      <h1>Maps</h1>
      <Poi {...props} />
    </div>
  );
};

export default Maps;
