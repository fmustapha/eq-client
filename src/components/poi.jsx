import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

class Poi extends Component {
  state = {
    poi: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  componentDidMount() {
    const { poi, loaded } = this.props;
    this.setPoi({ poi, loaded, displayToolTip: false });
  }

  componentDidUpdate(prevProps) {
    const { poi, loaded } = this.props;
    if (poi && prevProps.poi.length < this.props.poi.length)
      this.setPoi({ poi, loaded, displayToolTip: false });
  }

  setPoi = ({ poi, loaded }) => {
    this.setState({ poi, loaded });
  };

  handleClick = e => {
    this.setState({
      displayToolTip: true
    });
  };

  onMouseEnter = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMouseExit = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: false
    });

  generatePoiMarkers = () => {
    const { poi } = this.state;
    if (poi.length > 0) {
      return this.state.poi.map(p => {
        return (
          <Marker
            key={p.poi_id}
            id={p.poi_id}
            name={p.name}
            position={{ lat: p.lat, lng: p.lon }}
            onMouseover={this.onMouseEnter}
            onMouseout={this.onMouseExit}
          ></Marker>
        );
      });
    } else
      return <p>'The map is currently unavailable! Please try again later'</p>;
  };

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
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
        </InfoWindow>
      </Map>
    ) : (
      <p>Loading Map...</p>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_KEY
})(Poi);
