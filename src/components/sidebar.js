import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CitiesList from '../containers/cities_list';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="row sidebar">
        <div className="container-fluid col-xs-4">
          <SearchBar />
          <CitiesList />
        </div>
      </div>
    );
  }
}
