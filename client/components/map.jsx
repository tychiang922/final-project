import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RenderMarkers from './marker-render';
import AppContext from '../lib/app-context';

const id = ['c3caed1a16123b9f'];
const key = process.env.MAPS_API_KEY;

export default class Map extends React.Component {
  render() {
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
          <Marker position={defaultLocation}/>
          <RenderMarkers />
        </GoogleMap>
      </LoadScript>
    );
  }
}

Map.contextType = AppContext;
