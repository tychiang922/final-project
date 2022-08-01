import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker
} from '@react-google-maps/api';
const id = ['c3caed1a16123b9f'];
const key = 'AIzaSyCn2kPCBIEv3Tkz2pI-W88ra2TeqHqdxfo';
let defaultLocation = { lat: 40.756795, lng: -73.954298 };
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      mobile: null,
      nearby: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
    });
    const { innerWidth: windowWidth } = window;
    if (windowWidth < 600) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    const { latitude, longitude, mobile } = this.state;
    if (latitude && longitude) {
      defaultLocation = { lat: latitude, lng: longitude };
      fetch(`/api/nearby?lat=${latitude}&lng=${longitude}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(result => {
          // const res = result.jsonBody.businesses;
          // const markerData = res.map(value => value);
          // // this.setState({ nearby: markerData });
          // console.log(this.state.nearby);
          // console.log('hello');
        });
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
  // renderMarker() {
  //   return markerData.map((value, i) => {
  //     return <Marker key={i} position={value.coordinates} label={value.id} />;
  //   });
  // }

  // render() {
  //   const { latitude, longitude, mobile } = this.context;
  //   if (latitude && longitude) {
  //     defaultLocation = { lat: latitude, lng: longitude };
  //     fetch(`/api/nearby?lat=${latitude}&lng=${longitude}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(result => {
  //         const res = result.jsonBody.businesses;
  //         markerData = res.map(value => value);
  //         const mDataMap = markerData.map(value => {
  //           return value.id;
  //         });
  //         console.log(mDataMap)
  //       });
  //   }
  //   return (
  //     <div>
  //       <LoadScript googleMapsApiKey={key} mapIds={id} >
  //         <GoogleMap
  //           center={defaultLocation}
  //           zoom={15}
  //           options={{
  //             mapId: 'c3caed1a16123b9f',
  //             mapTypeControl: false,
  //             zoomControl: !mobile,
  //             disableDefaultUI: true
  //           }}
  //           mapContainerClassName='map-container'
  //         >
  //           <Marker position={defaultLocation} />
  //         </GoogleMap>
  //       </LoadScript>
  //     </div>
  //   );
  // }
}
