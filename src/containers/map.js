import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapObj: {}
    }
  }

  componentDidMount() {
    this.setState({
      mapObj: new google.maps.Map(this.refs.map, {
        zoom: 12
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.map !== nextProps.map) { this.repositionMap(nextProps.map) };

    if (nextProps.shows.length) { this.drawShowMarkers(nextProps.shows) }
  }

  drawShowMarkers(shows) {
    for (let show of shows) {
      let location = {
        lat: show.venue.lat,
        lng: show.venue.lng
      }

      let infowindow = new google.maps.InfoWindow({
        content: `<h1>${show.performance[0].artist.displayName}</h1>`,
        maxWidth: 500
      });

      let marker = new google.maps.Marker({
        position: location,
        map: this.state.mapObj,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', function() {
        infowindow.open(this.state.mapObj, marker);
      }.bind(this));
    }
  }

  repositionMap(mapData) {
    let coords = {
      lat: mapData.lat,
      lng: mapData.lng
    };

    this.state.mapObj.setCenter(coords);
  }

  render() {
    return <div className="map" ref="map" />;
  }
}

function mapStateToProps({ map, shows }) {
  return { map, shows };
}

export default connect(mapStateToProps)(Map);
