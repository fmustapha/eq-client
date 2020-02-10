import React, { Component } from "react";
// import Table from "./common/table";

class Tables extends Component {
  state = {
    poiDetails: []
  };

  componentDidMount() {
    const { poiDetails } = this.props;
    this.setState({ poiDetails });
  }

  render() {
    const { poiDetails } = this.props;

    return (
      <table className="table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Date</th>
              <th>Hour</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Revenue</th>
              <th>Events</th>
            </tr>
        </thead>
        <tbody>
          {poiDetails.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.lat}</td>
              <td>{data.lon}</td>
              <td>{data.date}</td>
              <td>{data.hour}</td>
              <td>{data.impressions}</td>
              <td>{data.clicks}</td>
              <td>{data.revenue}</td>
              <td>{data.events}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tables;
