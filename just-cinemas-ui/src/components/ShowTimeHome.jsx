import React, { Component } from 'react';
import MovieList from '../containers/showTime/MovieList';

class ShowTimeHome extends Component {
  render() {
    return (
      <MovieList />
    );
  }
}

ShowTimeHome.defaultProps = {};

export default ShowTimeHome;
