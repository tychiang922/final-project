import React from 'react';
import Map from '../components/map.jsx';
import MobileNavBar, { DesktopNavBar } from '../components/nav-bar.jsx';
import getYelp, { getYelpById, getYelpReview } from '../components/get-yelp.jsx';
import AppContext from '../lib/app-context';
import Loading from '../components/loading-page.jsx';
import BusinessSearch from '../components/business-search.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLongitude: null,
      userLatitude: null,
      userCategoryInput: '',
      userCategorySubmit: '',
      places: [],
      isLoading: true,
      searchActive: false,
      currentSearch: []
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBusinessInfo = this.getBusinessInfo.bind(this);
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
          places: ['empty'],
          isLoading: false
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

  async getBusinessInfo(id) {
    const businessId = await getYelpById(id);
    const businessReview = await getYelpReview(id);
    this.setState({
      currentSearch: { ...businessId.jsonBody, ...businessReview.jsonBody }
    });
  }

  toggle() {
    this.setState(prevState => ({
      searchActive: !prevState.searchActive
    }));
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
      userCategoryInput: '',
      searchActive: false
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
    const { handleSubmit, handleChange, yelpFetch, toggle, getBusinessInfo } = this;
    const { currentSearch, userLongitude, userLatitude, userCategorySubmit, places, isLoading, searchActive } = this.state;
    const contextValue = { currentSearch, getBusinessInfo, searchActive, handleSubmit, handleChange, yelpFetch, userLongitude, userLatitude, userCategorySubmit, places, isLoading };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Map />
          <DesktopNavBar onChange={handleChange} onSubmit={handleSubmit} toggle={toggle} searchActive={searchActive}/>
          <MobileNavBar />
          <Loading isLoading={this.state.isLoading} />
          <BusinessSearch />
        </>
      </AppContext.Provider>
    );
  }
}

Home.contextType = AppContext;
