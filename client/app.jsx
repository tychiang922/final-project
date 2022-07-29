import React from 'react';
import Home from './pages/home';
import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      mobile: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
    });
  }

  render() {
    const { innerWidth: windowWidth } = window;
    if (windowWidth < 600) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
    // this.setState({ width: windowWidth });
    const { latitude, longitude, mobile } = this.state;
    const contextValue = { latitude, longitude, mobile };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Home />
        </>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;
