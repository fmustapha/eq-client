import React, { Component } from "react";
import { Route } from "react-router-dom";
import Charts from "./charts";
import Maps from "./maps";
import Tables from "./tables";
import Tabs from "./common/tabs";
import { formatDate } from "../utils/formatDate";

class Home extends Component {
  state = {
    error: null,
    isLoaded: false,
    dailyEvents: [],
    hourlyEvents: [],
    dailyStats: [],
    hourlyStats: [],
    poi: [],
    sections: ["Charts", "Tables", "Maps"]
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

  handleSelect = item => {
    this.setState({
      selectedSection: item
    });
  };

  render() {
    const {
      dailyEvents,
      hourlyEvents,
      hourlyStats,
      dailyStats,
      poi,
      selectedSection,
      sections
    } = this.state;
    return (
      <React.Fragment>
        <div id="container" style={{ width: "100%", height: 400 }}>
          <Tabs
            selectedSection={selectedSection}
            sections={sections}
          />
          <Route path="/home/maps" component={Maps} />
          <Route path="/home/Tables" component={Tables} />
          <Route
            path="/home/charts"
            render={props => (
              <Charts
                dailyEvents={dailyEvents}
                hourlyEvents={hourlyEvents}
                hourlyStats={hourlyStats}
                dailyStats={dailyStats}
                poi={poi}
                {...props}
              />
              
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
