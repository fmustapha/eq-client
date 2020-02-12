import React from "react";
import Poi from "./poi";

const Maps = props => {
  return (
    <div className="content">
      <h1>Maps</h1>
      <p>
        Hover over the markers on the map to view Vancouver Harbour, Niagara
        Falls, CN Tower and EQ Works!
      </p>
      <Poi {...props} />
    </div>
  );
};

export default Maps;
