import React from 'react';
import Map from '../components/map.jsx';
import { DesktopNavBar } from '../components/nav-bar.jsx';
import getYelp from '../components/get-yelp.jsx';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLongitude: null,
      userLatitude: null,
      userCategoryInput: '',
      userCategorySubmit: '',
      places: [],
      isLoading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async yelpFetch() {
    if (this.state.places.length === 0) {
      let { userLatitude, userLongitude, userCategorySubmit } = this.state;
      if (userCategorySubmit === undefined) {
        userCategorySubmit = 'food';
      }
      const yelp = await getYelp(userLatitude, userLongitude, userCategorySubmit);
      if (yelp.length === 0) {
        this.setState({
          places: ['placeholder']
        });
      } else {
        this.setState({
          places: yelp,
          isLoading: false
        });
      }
    } else {
      return null;
    }
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      userCategoryInput: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const catInput = this.state.userCategoryInput;
    this.setState({
      userCategorySubmit: catInput,
      places: [],
      isLoading: true,
      userCategoryInput: ''
    });
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
    this.yelpFetch();
    const { handleSubmit, handleChange, yelpFetch } = this;
    const { userLongitude, userLatitude, userCategorySubmit, places, isLoading } = this.state;
    const contextValue = { handleSubmit, handleChange, yelpFetch, userLongitude, userLatitude, userCategorySubmit, places, isLoading };
    // if (places.length === 0) {
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Map />
          <DesktopNavBar onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </>
      </AppContext.Provider>
    );
  }
}

Home.contextType = AppContext;
