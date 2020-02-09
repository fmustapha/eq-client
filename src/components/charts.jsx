import React from 'react'
import DailyEvents from "./dailyEvents";
import HourlyEvents from "./hourlyEvents";
import HourlyStats from "./hourlyStats.jsx";
import DailyStats from "./dailyStats";
import Poi from "./poi";


const Charts = (props) => {
  const { dailyEvents, hourlyEvents, hourlyStats, dailyStats, poi } = props;
  return (
    <React.Fragment>
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
      <div className="row">
        <div className="col-md">
          <Poi data={poi} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;