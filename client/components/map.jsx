import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';
import AppContext from '../lib/app-context.js';
const id = ['c3caed1a16123b9f'];
const key = 'AIzaSyCn2kPCBIEv3Tkz2pI-W88ra2TeqHqdxfo';
let defaultLocation = { lat: 40.756795, lng: -73.954298 };

export default class Map extends React.Component {
  render() {
    const { latitude, longitude, mobile } = this.context;
    if (latitude && longitude) {
      defaultLocation = { lat: latitude, lng: longitude };
    }
    return (
      <div>
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
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}
Map.contextType = AppContext;
// export default function Map(props) {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
//   return <GoogleMap
//   zoom={15}
//   center={center}
//   mapContainerClassName="map-container"
//   options={{ mapId: 'c3caed1a16123b9f' }}>
//     <Marker position={center} />
//   </GoogleMap>;
// }
