import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class ShowsListItem extends Component{
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(event) {
    this.props.show.marker.setAnimation(google.maps.Animation.BOUNCE);
  }

  onMouseLeave(event){
    this.props.show.marker.setAnimation(null);
  }

  displayArtistNames(artistData) {
    return <li className="small text-muted">{artistData.artist.displayName}</li>;
  }

  render () {
    let headliner = this.props.show.performance.splice(0, 1)[0]

    return(
      <li className="list-group-item" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} key={this.props.show.id}>
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
