import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CitiesList from '../containers/cities_list';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SearchBar />
        <CitiesList />
      </div>
    );
  }
}
