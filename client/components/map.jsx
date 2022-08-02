import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const id = ['c3caed1a16123b9f'];
const key = process.env.MAPS_API_KEY;
let defaultLocation = { lat: 40.756795, lng: -73.954298 };

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      mobile: null,
      places: []
    };
  }

  renderMarkers() {
    if (this.state.latitude || this.state.longitude) {
      return this.state.places.map((value, id) => {
        defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
        return <Marker key={value.id} position={defaultLocation} />;
      });
    } else {
      return null;
    }
  }

  renderMap() {
    const { latitude, longitude, mobile } = this.state;
    if (latitude || longitude) {
      defaultLocation = { lat: latitude, lng: longitude };
    }
    return (
      <LoadScript googleMapsApiKey={key} mapIds={id} >
        <GoogleMap
          center={defaultLocation}
          zoom={15}
          options={{
            mapId: 'c3caed1a16123b9f',
            mapTypeControl: false,
            zoomControl: !mobile,
            disableDefaultUI: true
          }}
          mapContainerClassName='map-container'
        >
          <Marker position={defaultLocation} />
          {this.renderMarkers()}
        </GoogleMap>
      </LoadScript>
    );
  }

  componentDidMount() {
    if (!this.state.latitude) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
        fetch(`/api/nearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(result => {
            this.setState({ places: result.jsonBody.businesses });
          });
      });
      const { innerWidth: windowWidth } = window;
      if (windowWidth < 600) {
        this.setState({ mobile: true });
      } else {
        this.setState({ mobile: false });
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderMap()}
      </div>
    );
  }
}
