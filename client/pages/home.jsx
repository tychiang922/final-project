import React from 'react';
import Map from '../components/map.jsx';
import NavBar from '../components/nav-bar';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Map />
        <NavBar />
      </>
    );
  }
}
