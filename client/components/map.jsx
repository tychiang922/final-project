import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RenderMarkers from './marker-render';
import AppContext from '../lib/app-context';

const id = ['c3caed1a16123b9f'];
const key = process.env.MAPS_API_KEY;

export default class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: true
  //   };
  // }

  // renderMarkers() {
  //   if (this.state.latitude || this.state.longitude) {
  //     const iconMarker = new window.google.maps.MarkerImage(
  //       'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  //       null,
  //       null,
  //       null,
  //       new window.google.maps.Size(50, 50)
  //     );
  //     return this.state.places.map((value, id) => {
  //       defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
  //       return <Marker icon={ iconMarker }key={value.id} position={defaultLocation} />;
  //     });
  //   } else {
  //     return null;
  //   }
  // }

  // componentDidMount() {
  //   let yelpTerm = 'food';
  //   if (this.state.category) {
  //     yelpTerm = this.state.category;
  //     this.setState({ category: '' });
  //   }
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
  //     fetch(`/yelp/nearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}&category=${yelpTerm}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(result => {
  //         this.setState({ places: result.jsonBody.businesses });
  //       });
  //   });
  //   const { innerWidth: windowWidth } = window;
  //   if (windowWidth < 600) {
  //     this.setState({ mobile: true });
  //   } else {
  //     this.setState({ mobile: false });
  //   }
  // }

  // locate() {
  //   if (!this.state.latitude) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
  //     });
  //   }
  // }

  render() {
    // this.locate();
    const { userLatitude, userLongitude } = this.context;
    let defaultLocation = { lat: 40.756795, lng: -73.954298 };
    if (userLatitude || userLongitude) {
      defaultLocation = { lat: userLatitude, lng: userLongitude };
    }
    return (
      <LoadScript googleMapsApiKey={key} mapIds={id} >
        <GoogleMap
          center={defaultLocation}
          zoom={15}
          options={{
            mapId: 'c3caed1a16123b9f',
            mapTypeControl: false,
            zoomControl: false,
            disableDefaultUI: true
          }}
          mapContainerClassName='map-container'
        >
          <Marker position={defaultLocation} />
          <RenderMarkers />
        </GoogleMap>
      </LoadScript>
    );
  }
}

Map.contextType = AppContext;
