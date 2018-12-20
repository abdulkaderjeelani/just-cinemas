import React, { Component, PropTypes } from 'react';
import MovieCertificate from 'components/MovieDetails/MovieCertificate';
import changeCase from 'change-case/change-case';
import slug from 'slug';

class MovieInfo extends Component {
  render() {
    const { desc } = this.props;
    const movieSlug = slug(changeCase.sentenceCase(desc.name), { lower: true });
    const movieUrl = `https://img.spicinemas.in/resources/images/movies/${movieSlug}/1000x320.jpg`;
    return (
      <div className="row" >
        <div className="movieHeader">
          <span id="moviename">{desc.name}</span>
          <MovieCertificate certificate={desc.certificate} />
          <span id="language">{desc.language}</span>
        </div>
        <img alt={desc.name} src={movieUrl} />
        <h4>SYNOPSIS</h4>
        <p id="synopsis">{desc.synopsis}</p>
        <div id="movie-details">
          <p>
            <span className="bold">Genre:</span>
            <span id="genre">{desc.genre}</span>
          </p>
          <p>
            <span className="bold">Crew:</span>
            <span id="crew">{desc.crew}</span>
          </p>
          <p>
            <span className="bold">Cast:</span>
            <span id="cast">{desc.cst}</span>
          </p>
          <p>
            <span className="bold">Runtime:</span>
            <span id="runtime">{desc.duration} Minutes</span>
          </p>
        </div>
      </div>
    );
  }
}

MovieInfo.defaultProps = {};

MovieInfo.propTypes = {
  desc: PropTypes.shape({
    items: PropTypes.Object,
  }),
};

export default MovieInfo;
