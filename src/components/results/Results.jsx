import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <figure>
    <figcaption>{results}</figcaption>
  </figure>
);

Results.propTypes = {
  results: PropTypes.string.isRequired,
};

export default Results;
