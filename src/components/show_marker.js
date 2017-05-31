import React, { Component } from 'react';

export default class ShowMarker extends Component {
  constructor(props) {
    super(props);
  }

  markerWindow() {
    let artists = this.props.show.performance.map((artist) => `<h5>${artist.displayName}</h5>`).join('');
    return `${artists}<h6>${this.props.show.venue.displayName}</h6>`
  }

  render() {
    let location = {
      lat: this.props.show.venue.lat,
      lng: this.props.show.venue.lng
    }

    if (location.lat && location.lng) {
      let infowindow = new google.maps.InfoWindow({
        content: this.markerWindow(),
        maxWidth: 500,
      });

      this.props.show.marker = new google.maps.Marker({
        position: location,
        map: this.props.mapObj,
        animation: google.maps.Animation.DROP,
      });

      this.props.show.marker.addListener('click', function() {
        infowindow.open(this.props.mapObj, this.props.show.marker);
      }.bind(this));
    }

    return <div></div>;
  }
}
