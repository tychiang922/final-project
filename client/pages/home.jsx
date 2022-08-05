import React from 'react';
import Map from '../components/map.jsx';
import MobileNavBar from '../components/nav-bar.jsx';
import getYelp from '../components/get-yelp.jsx';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLongitude: null,
      userLatitude: null,
      category: '',
      places: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async yelpFetch() {
    if (this.state.places.length === 0) {
      const { userLatitude, userLongitude, category } = this.state;
      const yelp = await getYelp(userLatitude, userLongitude, category);
      this.setState({
        places: yelp
      });
    } else {
      return null;
    }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ category: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ category: value });
  }

  locate() {
    if (!this.state.userLatitude) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({ userLongitude: position.coords.longitude, userLatitude: position.coords.latitude });
      });
    }
  }

  render() {
    this.locate();
    const { yelpFetch } = this;
    const contextValue = { yelpFetch };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Map latitude={this.state.userLatitude} longitude={this.state.userLongitude} places={this.props.places} />
          <MobileNavBar />
        </>
      </AppContext.Provider>
    );
  }
}
