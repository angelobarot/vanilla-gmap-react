import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import style from './assets/scss/main.scss';

const google = window.google;

class App extends Component {
  constructor() {
    super();
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    let map = new google.maps.Map(this.mapContainer.current, {
      center: {
        lat: 12.8797,
        lng: 121.7740
      },
      zoom: 8
    })
  }

  render() {
    return (
      <div className="App">
        <div className={style.map} ref={this.mapContainer} id="map"></div>
      </div>
    );
  }
}

export default App;
