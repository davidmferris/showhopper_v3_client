import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShows } from '../actions/index';
import { positionMap } from '../actions/index';

class CitiesList extends Component {
  constructor(props) {
    super(props);

    this.renderCityData = this.renderCityData.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(cityData) {
    const metroId = cityData.metroArea.id
    event.preventDefault()

    this.props.positionMap(cityData)
    this.props.getShows(metroId);
  }

  renderCityData(cityData) {
    return (
      <li key={cityData.metroArea.id}>
        <a onClick={() => this.onLinkClick(cityData)}>{cityData.city.displayName}</a>
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
  return bindActionCreators({ positionMap, getShows }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
