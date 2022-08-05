import React from 'react';
import { Marker } from '@react-google-maps/api';
import AppContext from '../lib/app-context';

export default class RenderMarkers extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: true
  //   };
  // }

  // async yelpFetch() {
  //   if (this.state.places.length === 0) {
  //     const { latitude, longitude, category } = this.props;
  //     const yelp = await getYelp(latitude, longitude, category);
  //     this.setState({
  //       places: yelp
  //     });
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    const { yelpFetch } = this.context;
    yelpFetch();
    const iconMarker = new window.google.maps.MarkerImage(
      'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      null,
      null,
      null,
      new window.google.maps.Size(50, 50)
    );
    return this.props.places.map((value, id) => {
      const defaultLocation = { lat: value.coordinates.latitude, lng: value.coordinates.longitude };
      return <Marker icon={iconMarker} key={value.id} position={defaultLocation} />;
    });
  }
}

RenderMarkers.contextType = AppContext;
