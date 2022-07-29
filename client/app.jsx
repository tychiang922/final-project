import React from 'react';
import Home from './pages/home';
import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude });
    });
  }

  render() {
    const { latitude, longitude } = this.state;
    const contextValue = { latitude, longitude };
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
