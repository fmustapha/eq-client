import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Tables extends Component {
  state = {
    poiDetails: [],
    search: "",
    highlight: false,
    currentPage: 1,
    pageSize: 10
  };

  componentDidMount() {
    const { poiDetails } = this.props;
    this.setState({ poiDetails });
  }

  componentDidUpdate(prevProps) {
    const { poiDetails } = this.props;
    if (
      poiDetails &&
      prevProps.poiDetails.length < this.props.poiDetails.length
    )
      this.setState({ poiDetails });
  }

  getSearchResult = () => {
    const { poiDetails: data, search: term } = this.state;
    const result = [];
    const arr = [...data];
    if (term.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        for (let dat in arr[i]) {
          let str = JSON.stringify(arr[i][dat]);
          if (str.includes(term)) {
            result.push(arr[i]);
            arr[i] = { ...arr[i], id: "match" };
          }
        }
      }
      return result.length > 0 && arr;
    }
  };

  showSearchResult = () => {
    const result = this.getSearchResult();
    if (result) {
      this.setState({ highlight: true, searchData: result });
    } else {
      this.setState({ highlight: false });
    }
  };

  getPaginatedData = ({ poiDetails, pageSize, currentPage }) => {
    const paginated = paginate(poiDetails, currentPage, pageSize);
    return { totalCount: poiDetails.length, poiDetails: paginated };
  };

  //Page Event handler
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderbody = ({ details, highlight, search }) => {
    let tableData = [...details];
    const { searchData, pageSize, currentPage } = this.state;
    if (search && searchData) {
      const result = paginate(searchData, currentPage, pageSize);
      tableData = [...result];
    }
    return tableData.map((data, index) => {
      return (
        <tr className={`${searchData && data.id ? "hover" : ""}`} key={index}>
          <td>{data.name}</td>
          <td>{data.date}</td>
          <td>{data.events}</td>
          <td>{data.impressions}</td>
          <td>{data.clicks}</td>
          <td>{data.revenue}</td>
        </tr>
      );
    });
  };

  handleSearch = ({ currentTarget: input }) => {
    this.setState({ [input.name]: input.value });
    this.showSearchResult();
  };

  render() {
    const { pageSize, currentPage, highlight, search, poiDetails } = this.state;
    const data = { poiDetails, pageSize, currentPage };
    const { totalCount, poiDetails: details } = this.getPaginatedData(data);
    return (
      <div className="row table">
        <input
          name="search"
          onChange={this.handleSearch}
          className="form-control"
          type="text"
          placeholder="Type in a POI name..."
          aria-label="Search"
        ></input>
        <table className="table">
          <caption>Pois statistics and Event Details</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Events</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {details && this.renderbody({ details, highlight, search })}
          </tbody>
        </table>
        <Pagination
          pageCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Tables;
