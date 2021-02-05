import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => (
  <figure>
    <h1>{results}</h1>
  </figure>
);

Results.propTypes = {
  results: PropTypes.object.isRequired,
};

export default Results;
