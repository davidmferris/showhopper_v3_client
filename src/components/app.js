import React, { Component } from 'react';
import Sidebar from './sidebar';
import Map from '../containers/map';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-5">
          <Sidebar />
        </div>
        <div className="col-xs-7">
          <Map />
        </div>
      </div>
    );
  }
}
