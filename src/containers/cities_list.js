import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShows } from '../actions/index';
import { positionMap } from '../actions/index';
import { displayShowsList } from '../actions/index';

class CitiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.renderCityData = this.renderCityData.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(cityData) {
    const metroId = cityData.metroArea.id
    event.preventDefault()

    this.props.positionMap(cityData)
    this.props.getShows(metroId).then(function() {
      this.props.displayShowsList(true);
    }.bind(this));
  }

  renderCityData(cityData) {
    let stateName = cityData.city.state ? cityData.city.state.displayName : cityData.city.country.displayName;

    return (
      <li className="list-group-item" key={cityData.city.id}>
        <a onClick={() => this.onLinkClick(cityData)}>{cityData.city.displayName}, {stateName}</a>
      </li>
    )
  }

  render() {
    return (
      <ul className="cities-list list-group">{this.props.cities.map(this.renderCityData)}</ul>
    )
  }
}

function mapStateToProps({ cities }) {
  return { cities };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ positionMap, getShows, displayShowsList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
