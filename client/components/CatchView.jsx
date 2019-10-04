import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CatchForm from './CatchForm';
import { getPosition, 
         processPosition,
         convertToLocalTime } from '../utils/geolocation';

class CatchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 36.5785,
      longitude: -118.2923,
      altitude: null,
      timestamp: null,
      date: '',
      time: '',
      zoom: 15,
    };
    this.getLocation.bind(this);
  }

  getLocation = () => {
    const options = {
      maximumAge: 15000,
      enableHighAccuracy: true,
      timeout: 15000,
    };
    getPosition(options)
    .then(position => {
      const coords = processPosition(position);
      const [ date, time ] = convertToLocalTime(coords.timestamp)
      coords.date = date;
      coords.time = time;
      if (!coords.altitude) {
        coords.altitude = 'Not supported on device.'
      }
      this.setState(coords);
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className="catch-view" style={{ height: '40vh' }}>
        <div className="catch-map-container" style={{ height: '40vh'}}>
          <GoogleMapReact 
            bootstrapURLKeys={{}}
            center={{
              lat: this.state.latitude,
              lng: this.state.longitude }}
            zoom={this.state.zoom} 
          >
          </GoogleMapReact>
          <CatchForm { ...this.state }/>
        </div>
      </div>

    )
  }
}

export default CatchView;