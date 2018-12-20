import React, { Component } from 'react';
import LocationSelection from './LocationSelection';

class Header extends Component {
  render() {
    return (
      <div className="float-right" >
        <h1>Just Cinemas</h1>
        <LocationSelection names={['Chennai', 'Bangalore', 'Coimbatore']} />
      </div >
    );
  }
}

Header.defaultProps = {};

export default Header;
