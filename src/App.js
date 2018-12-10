import React, { Component } from 'react';

import Router from './router/'

import Nav from './components/nav'

class App extends Component {
  render() {
    return (
      <div className="mod-app">
        <Nav />
        <div>
            {<Router />}
        </div>
      </div>
    );
  }
}

export default App;