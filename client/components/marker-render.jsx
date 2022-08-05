import React from 'react';
import { Marker } from '@react-google-maps/api';
import AppContext from '../lib/app-context';

export default class RenderMarkers extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     places: [],
  //     isLoading: true
  //   };
  // }

  // async yelpFetch() {
  //   if (this.state.places.length === 0) {
  //     let { latitude, longitude, category } = this.props;
  //     if (category === undefined) {
  //       category = 'food';
  //     }
  //     const yelp = await getYelp(latitude, longitude, category);
  //     console.log(yelp);
  //     this.setState({
  //       places: yelp,
  //       isLoading: false
  //     });
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    const { places, isLoading } = this.context;
    if (isLoading !== false) {
      return null;
    }
    const iconMarker = new window.google.maps.MarkerImage(
      'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      null,
      null,
      null,
      new window.google.maps.Size(50, 50)
    );
    return places.map((value, id) => {
      const defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
      return <Marker icon={iconMarker} key={value.id} position={defaultLocation} />;
    });
  }

  // render() {
  //   this.yelpFetch();
  //   if (this.state.isLoading === true) {
  //     return null;
  //   }
  //   const iconMarker = new window.google.maps.MarkerImage(
  //     'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  //     null,
  //     null,
  //     null,
  //     new window.google.maps.Size(50, 50)
  //   );
  //   return this.state.places.map((value, id) => {
  //     const defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
  //     return <Marker icon={iconMarker} key={value.id} position={defaultLocation} />;
  //   });
  // }
}
RenderMarkers.contextType = AppContext;
