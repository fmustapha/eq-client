import React from "react";
import Chart from "react-google-charts";

const PoiChart = ({ data }) => {
  const formated = data.map(dat => {
    return [dat.name, dat.lat];
  });
  formated.unshift(["Name", "Latitude"]);
  return (
    <div style={{ display: "flex", maxWidth: 900 }}>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="GeoChart"
        data={formated}
        options={{
          
          region: "021",
          displayMode: "markers",
          colorAxis: { colors: ["green", "blue"] }
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey={process.env.REACT_APP_KEY}
        rootProps={{ "data-testid": "4" }}
      />
    </div>
  );
};

export default PoiChart;
