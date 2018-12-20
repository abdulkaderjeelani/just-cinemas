import React, { Component } from 'react';
import MovieGrid from 'containers/MovieGrid';

class Home extends Component {
  render() {
    return (
      <MovieGrid />
    );
  }
}

Home.defaultProps = {};

export default Home;
