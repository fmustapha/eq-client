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
      <div className="col-md">
        <p>Interesting places in North America and their coordinates (Hover over colors for more information)</p>
        <PoiChart data={poi} />
      </div>
      <div className="row">
        <div className="col-md">
          <DailyEvents data={dailyEvents} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <HourlyEvents data={hourlyEvents} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <HourlyStats data={hourlyStats} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <DailyStats data={dailyStats} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;
