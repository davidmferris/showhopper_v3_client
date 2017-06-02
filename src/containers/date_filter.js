import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShows } from '../actions/index';
import { clearShows } from '../actions/index';
import moment from 'moment';

class DateFilter extends Component {
  getShows(numDaysFromNow) {
    let day = moment().add(numDaysFromNow, 'days').format('YYYY-MM-DD');

    this.props.clearShows(this.props.shows);
    this.props.getShows(this.props.map.id, day);
  }

  render() {
    return(
      <div className="date-filter-buttons img-rounded">
        <div className="col-xs-4">
          <button
            type="button"
            onClick={() => this.getShows(0)}
            className="btn btn-primary-outline btn-block">
            Today
            <br/>
              <small>{moment().format('ddd, MMM Do')}</small>
          </button>
        </div>
        <div className="col-xs-4">
          <button
            type="button"
            onClick={() => this.getShows(1)}
            className="btn btn-primary-outline btn-block">
            Tomorrow
            <br/>
              <small>{moment().add(1, 'days').format('ddd, MMM Do')}</small>
          </button>
        </div>
        <div className="col-xs-4">
          <button
            type="button"
            onClick={() => this.getShows(2)}
            className="btn btn-primary-outline btn-block">
            Next Day
            <br />
              <small>{moment().add(2, 'days').format('ddd, MMM Do')}</small>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { map, shows }) {
  return { map, shows }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getShows, clearShows }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
