
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCities } from '../actions/index';

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

    this.props.searchCities(this.state.query)
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Choose your city"
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCities }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
