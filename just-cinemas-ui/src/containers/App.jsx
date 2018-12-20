import React, { Component } from 'react';
import Home from 'components/Home';
import Header from 'components/Header';

class AppComponent extends Component {
  render() {
    return (
      <div className="app">
        <div className="header" >
          <Header />
        </div>
        <div >
          <Home />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
