import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import CitiesList from './cities_list';
import ShowsList from './shows_list';
import DateFilter from './date_filter';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar container-fluid col-xs-3">
        <div className="row">
          <SearchBar />
          {this.props.shows.length ? null : <CitiesList />}
        </div>
        <div className="row">
          <div className="show-container">
            {this.props.shows.length ? <DateFilter /> : null}
            <ShowsList />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps( { shows }) {
  return { shows };
}

export default connect(mapStateToProps)(Sidebar);
