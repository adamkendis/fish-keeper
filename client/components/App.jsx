import React, { Component } from 'react';
import { createMap, getPosition, processPosition } from '../utils/geolocation.js';
import NavBar from './NavBar';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 36.4974,
      longitude: -118.2172,
    };
  }
  
  componentDidMount() {
    // let options = {
    //   maximumAge: 15000,
    //   enableHighAccuracy: true,
    //   timeout: 15000,
    // }
    // createMap(this.state, 'map');
    // getPosition(options)
    //   .then(pos => {
    //     const coords = processPosition(pos);
    //     this.setState(coords);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
  }

  render() {
    const mapStyle = {
      height: '50%',
      width: '50%',
    }
    return (
      <div style={{height: '100%'}}>
        <NavBar />
        <Main />
        {/* <div id="map" style={mapStyle}></div> */}
        {/* <MainTable /> */}
      </div>
    )
  }
}

export default App;