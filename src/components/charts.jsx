import React from "react";
import DailyEvents from "./dailyEvents";
import HourlyEvents from "./hourlyEvents";
import HourlyStats from "./hourlyStats.jsx";
import DailyStats from "./dailyStats";
import PoiChart from "./poiChart";

const Charts = props => {
  const { dailyEvents, hourlyEvents, hourlyStats, dailyStats, poi } = props;
  return (
    <React.Fragment>
    <div className="row">
      <div className="col">
        <h3>Interesting places in North America and their statistics.</h3>
        <p>
          (Hover over colors for more information)
        </p>
        <PoiChart data={poi} />
      </div>
      </div>
      <div className="row">
        <div className="col">
          <DailyEvents data={dailyEvents} />
        </div>
        <div className="col">
          <HourlyEvents data={hourlyEvents} />
        </div>
        </div>
        <div className="row">
        <div className="col">
          <HourlyStats data={hourlyStats} />
        </div>
        <div className="col">
          <DailyStats data={dailyStats} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;
