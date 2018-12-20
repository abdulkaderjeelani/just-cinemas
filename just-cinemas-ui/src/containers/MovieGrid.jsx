import React, { Component, PropTypes } from 'react';
import MovieItem from 'components/MovieGrid/MovieItem';
import { connect } from 'react-redux';

class MovieGrid extends Component {
  componentWillMount() {
    // this.props.loadMovies();
  }

  showMovies() {
    return <div className="row movie-grid">{this.renderItems()}</div>;
  }

  showProgress() {
    return <div>Loading...</div>;
  }

  filterMovies(movies) {
    const { languages: { selectedLanguages } } = this.props;
    return selectedLanguages && selectedLanguages.length > 0 && movies.length > 0
      ? movies.filter(mov => selectedLanguages.includes(mov.language.toLowerCase()))
      : movies;
  }

  renderItems() {
    const { movies: { items = [] } } = this.props;
    return this.filterMovies(items).map(({ name, slug, language, location, movieId }) => (
      <MovieItem key={name} language={language} location={location} movieId={movieId} name={name} slug={slug} />
    ));
  }

  render() {
    const { movies: { fetching = false } } = this.props;
    return fetching ? this.showProgress() : this.showMovies();
  }

}

MovieGrid.defaultProps = state => ({
  movies: state.movies,
  selectedLanguages: state.selectedLanguages,
  selectedLocation: state.item,
});

MovieGrid.propTypes = {
  languages: PropTypes.shape({
    selectedLanguages: PropTypes.array,
  }),
  // loadMovies: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    items: PropTypes.array,
  }),
  selectedLocation: PropTypes.string,
};

const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({ loadMovies: () => dispatch(loadMovies()) });
export default connect(mapStateToProps)(MovieGrid);
