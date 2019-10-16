import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CatchForm from './CatchForm';
import SubmitButton from './SubmitButton';
import { getPosition, 
         processPosition,
         convertToLocalTime } from '../utils/geolocation';
import axios from 'axios';

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
  }

  getLocation = () => {
    const options = {
      maximumAge: 20000,
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
        console.log(coords);
        this.setState(coords);
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleLocationClick = (e) => {
    e.preventDefault();
    axios.post('/catch', this.state)
      .then(res => {
        console.log(res);
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
            defaultCenter={[36.5785, -118.2923]}
            center={[this.state.latitude, this.state.longitude]}
            zoom={this.state.zoom} 
          >
          </GoogleMapReact>
          <CatchForm { ...this.state }/>
          <SubmitButton onClick={this.handleLocationClick} >
            Submit
          </SubmitButton>
        </div>
      </div>

    )
  }
}

export default CatchView;