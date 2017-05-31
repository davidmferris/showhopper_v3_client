import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowsListItem from './shows_list_item';

class ShowsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="shows-list list-group">{this.props.shows.map((show) => <ShowsListItem show={show} />)}</ul>
    )
  }
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps)(ShowsList);
