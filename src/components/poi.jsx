import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Poi extends Component {
  state = { poi: [] };

  componentDidMount() {
    const { poi, loaded } = this.props;
      this.setPoi({ poi, loaded });
  }

  componentDidUpdate(prevProps) {
    const { poi, loaded } = this.props;
    if (poi && prevProps.poi.length < this.props.poi.length) this.setPoi({ poi, loaded });
  }

  setPoi = ({ poi, loaded }) => {
    this.setState({ poi, loaded });
  };

  generatePoiMarkers() {
    const { poi } = this.state;
    if (poi.length > 0) {
      return this.state.poi.map(p => {
        return <Marker
          key={p.poi_id}
          id={p.poi_id}
          name={p.name}
          position={{ lat: p.lat, lng: p.lon }}
          onClick={()=> console.log(`You clicked ${p.name}`)}
        />
      });
    } else return <p>'The map is currently unavailable! Please try again later'</p>
  }

  styles = {
    width: "60%",
    height: "60%"
  };

  render() {
    const { poi } = this.state;
    return poi && poi.length > 0 ? (
      <Map
        google={this.props.google}
        zoom={8}
        style={this.styles}
        initialCenter={{ lat: 43.6708, lng: -79.3899 }}
      >
        {this.generatePoiMarkers()}
      </Map>
    ) : (
      <p>Loading Map...</p>
    );
  }
}

// const Poi = (props) => {
//   return (
//     // <BarChart
//     //     width={900}
//     //     height={300}
//     //     data={data}
//     //     margin={{
//     //       top: 5, right: 30, left: 20, bottom: 5,
//     //     }}
//     //   >
//     //     <CartesianGrid strokeDasharray="3 3" />
//     //     <XAxis dataKey="name" />
//     //     <YAxis />
//     //     <Tooltip />
//     //     <Legend />
//     //     <ReferenceLine y={0} stroke="#000" />
//     //     <Bar dataKey="lat" fill="#8884d8" />
//     //     <Bar dataKey="lon" fill="#82ca9d" />
//     //   </BarChart>
//     <Map
//           google={this.props.google}
//           zoom={8}
//           style={styles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
//    );
// }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_KEY
})(Poi);
