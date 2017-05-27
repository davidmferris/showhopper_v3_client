import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowMarker from '../components/show_marker';

class Map extends Component {
  constructor(props) {
    super(props);

    this.drawShowMarkers = this.drawShowMarkers.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.setState({
        mapObj: new google.maps.Map(this.refs.map, {
          zoom: 12,
          mapTypeControl: false,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        })
      })

    }.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.map !== nextProps.map) {
      this.repositionMap(nextProps.map)
    };
  }

  drawShowMarkers(showData) {
    return (
      <ShowMarker key={showData.id} show={showData} mapObj={this.state.mapObj} />
    )
  }

  repositionMap(mapData) {
    let coords = {
      lat: mapData.lat,
      lng: mapData.lng
    };

    this.state.mapObj.setCenter(coords);
  }

  render() {
    return (
      <div>
        <div className="map" ref="map"></div>
        {this.props.shows.map(this.drawShowMarkers)}
      </div>
    );
  }
}

function mapStateToProps({ map, shows }) {
  return { map, shows };
}

export default connect(mapStateToProps)(Map);
