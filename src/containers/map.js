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

  componentDidUpdate() {
    if (this.props.map.lat && this.props.map.lng) {

      let coords = {
        lat: this.props.map.lat,
        lng: this.props.map.lng
      };

      this.state.mapObj.setCenter(coords);
    };
  }

  render() {
    return <div className="map" ref="map" />;
  }
}

function mapStateToProps({ map }) {
  return { map };
}

export default connect(mapStateToProps)(Map);
