import React, { Component, PropTypes } from 'react';

class MovieCertificate extends Component {
  render() {
    const { certificate } = this.props;
    return (
      <span className="certificatebg">{certificate}</span>
    );
  }
}

MovieCertificate.defaultProps = {};

MovieCertificate.propTypes = {
  certificate: PropTypes.string,
};

export default MovieCertificate;
