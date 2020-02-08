import React, { Component } from "react";
import DailyEvents from "./dailyEvents";
import HourlyEvents from "./hourlyEvents";
import HourlyStats from "./hourlyStats.jsx";
import DailyStats from "./dailyStats";
import Poi from "./poi";
import { formatDate } from "../utils/formatDate";

class Home extends Component {
  state = {
    error: null,
    isLoaded: false,
    dailyEvents: [],
    hourlyEvents: [],
    dailyStats: [],
    hourlyStats: [],
    poi: []
  };

  componentDidMount() {
    this.loadDailyEvents();
    this.loadHourlyEvents();
    this.loadHourlyStats();
    this.loadDailyStats();
    this.loadPoi();
  }

  loadDailyEvents = () => {
    fetch("/events/daily")
      .then(res => res.json())
      .then(result => {
        const data = formatDate(result);
        this.setState({
          dailyEvents: data,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  loadHourlyEvents = () => {
    fetch("/events/hourly")
      .then(res => res.json())
      .then(result => {
        const data = formatDate(result);
        this.setState({
          hourlyEvents: data,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  loadHourlyStats = () => {
    fetch("/stats/hourly")
      .then(res => res.json())
      .then(result => {
        const data = formatDate(result);
        this.setState({
          hourlyStats: data,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  loadDailyStats = () => {
    fetch("/stats/daily")
      .then(res => res.json())
      .then(result => {
        const data = formatDate(result);
        this.setState({
          dailyStats: data,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  loadPoi = () => {
    fetch("/poi")
      .then(res => res.json())
      .then(result => {
        this.setState({
          poi: result,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  render() {
    const {
      dailyEvents,
      hourlyEvents,
      hourlyStats,
      dailyStats,
      poi
    } = this.state;
    return (
      <React.Fragment>
        <div id="container" style={{ width: "100%", height: 400 }}>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
