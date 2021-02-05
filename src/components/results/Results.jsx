import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ results }) => (
  <figure>
    <figcaption>{results}</figcaption>
  </figure>
);

Result.propTypes = {
  results: PropTypes.string.isRequired,
};

export default Result;
