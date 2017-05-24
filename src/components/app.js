import React, { Component } from 'react';
import Sidebar from './sidebar';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-5">
          <Sidebar />
        </div>
      </div>
    );
  }
}
