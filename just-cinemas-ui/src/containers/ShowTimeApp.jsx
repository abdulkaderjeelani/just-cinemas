import React, { Component } from 'react';
import Header from 'components/Header';
import ShowTimeHome from '../components/ShowTimeHome';

class AppComponent extends Component {
  render() {
    return (
      <div className="app">
        <div className="header" >
          <Header />
        </div>
        <div >
          <ShowTimeHome />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
