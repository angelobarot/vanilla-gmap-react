import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MapContainer from './container/MapContainer';
import { store } from './redux/store';
import 'antd/dist/antd.css';
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MapContainer />
      </Provider>
    );
  }
}

export default App;
