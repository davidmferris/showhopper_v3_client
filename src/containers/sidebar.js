import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import CitiesList from './cities_list';
import ShowsList from './shows_list';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row sidebar">
        <div className="container-fluid col-xs-3">
          <SearchBar />
          { this.props.shows.length ? null : <CitiesList />}
          <ShowsList />
        </div>
      </div>
    );
  }
}

function mapStateToProps( { shows }) {
  return { shows };
}

export default connect(mapStateToProps)(Sidebar);
