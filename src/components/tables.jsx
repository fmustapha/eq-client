import React, { Component } from "react";
import Pagination from './common/pagination';

class Tables extends Component {
  state = {
    poiDetails: []
  };

  componentDidMount() {
    const { poiDetails } = this.props;
    this.setState({ poiDetails });
  }

  render() {
    const { poiDetails, pagination:{totalCount, currentPage, pageSize }, onPageChange} = this.props;

    return (
      <div className="row">
      <table className="table">
      <caption>Pois statistics and Event Details</caption>
        <thead>
            <tr>
              <th>Name</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Date</th>
              <th>Events</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Revenue</th>
            </tr>
        </thead>
        <tbody>
          {poiDetails.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.lat}</td>
              <td>{data.lon}</td>
              <td>{data.date}</td>
              <td>{data.events}</td>
              <td>{data.impressions}</td>
              <td>{data.clicks}</td>
              <td>{data.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
            pageCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
      />
      </div>
    );
  }
}

export default Tables;
