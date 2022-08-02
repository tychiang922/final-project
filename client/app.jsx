import React from 'react';
import Home from './pages/home';
import AppContext from './lib/app-context';

export default class App extends React.Component {

  render() {
    return (
       <Home />
    );
  }
}

App.contextType = AppContext;
