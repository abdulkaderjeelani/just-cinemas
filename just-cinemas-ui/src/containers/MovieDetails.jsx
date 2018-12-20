import React, { Component, PropTypes } from 'react';
import MovieInfo from 'components/MovieDetails/MovieInfo';
import { connect } from 'react-redux';
import loadMovieDetail from 'actions/movieDetail';
import Header from 'components/Header';

class Details extends Component {

  showMovieDetail() {
    const { movieDetail: { item = {} } } = this.props;
    return (
      <div className="app">
        <div className="header" >
          <Header />
        </div>
        <div >
          <MovieInfo desc={item} />
        </div>
      </div>);
  }

  showProgress() {
    return (
      <div>Loading...</div>
    );
  }

  render() {
    const { movieDetail: { fetching = false } } = this.props;
    return fetching ? this.showProgress() : this.showMovieDetail();
  }
}

Details.defaultProps = state => ({
  movieDetail: state.movieDetail,
});

Details.propTypes = {
  movieDetail: PropTypes.shape({
    item: PropTypes.Object,
  }),
  params: PropTypes.Object,
};

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch, props) => {
  dispatch(loadMovieDetail(props.params.id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
