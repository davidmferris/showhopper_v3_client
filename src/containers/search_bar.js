import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCities } from '../actions/index';
import { clearShows } from '../actions/index';
import { displayShowsList } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( { query: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.searchCities(this.state.query).then(function() {
      this.props.displayShowsList(false);
      this.props.clearShows(this.props.shows);
    }.bind(this));
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Enter a location"
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCities, clearShows, displayShowsList }, dispatch);
}

function mapStateToProps( { shows }) {
  return { shows };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
