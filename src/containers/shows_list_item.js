import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class ShowsListItem extends Component{
  constructor(props) {
    super(props);
  }

  displayArtistNames(artistData) {
    return <li className="small text-muted">{artistData.artist.displayName}</li>;
  }

  render () {
    let headliner = this.props.show.performance.splice(0, 1)[0]

    return(
      <li className="list-group-item" key={this.props.show.id}>
        <ul className="list-group list-unstyled">
          <li className="text-muted">{headliner.artist.displayName}</li>

          {this.props.show.performance.map(this.displayArtistNames)}

          <li>
            <em className="small text-primary">{this.props.show.venue.displayName}</em>
          </li>
        </ul>
      </li>
    )
  }
}
