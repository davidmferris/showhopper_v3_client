import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShows } from '../actions/index';

class CitiesList extends Component {
  constructor(props) {
    super(props);

    this.renderCityData = this.renderCityData.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    const metroId = event.target.getAttribute('data-metro-id');
    event.preventDefault()

    this.props.getShows(metroId);
  }

  renderCityData(cityData) {
    return (
      <li key={cityData.metroArea.id}>
        <a onClick={this.onLinkClick} data-metro-id={cityData.metroArea.id}>{cityData.city.displayName}</a>
      </li>
    )
  }

  render() {
    return (
      <ol>{this.props.cities.map(this.renderCityData)}</ol>
    )
  }
}

function mapStateToProps({ cities }) {
  return { cities };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getShows }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
