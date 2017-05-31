import React, { Component } from 'react';
import Sidebar from '../containers/sidebar';
import Map from '../containers/map';

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Map />
      </div>
    );
  }
}
