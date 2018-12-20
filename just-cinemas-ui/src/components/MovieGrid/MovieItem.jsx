import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MovieItem extends Component {
  render() {
    const { name, slug, language, experiences ,movieId } = this.props;
    console.log('movie item: movie ', this.props.name);
    const imageUrl = `https://img.spicinemas.in/resources/images/movies/${slug}/150x207.jpg`;
    return (
      <div className="col-md-2 movie-item">
        <Link to={`/movies/${movieId}`}>
          <img alt={name} src={imageUrl} />
          <h5>{name}</h5>
          <h6>{language}</h6>
          <h6>{experiences}</h6>
        </Link>
      </div>
    );
  }
}

MovieItem.defaultProps = {};

MovieItem.propTypes = {
  experiences: PropTypes.string,
  language: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieItem;
