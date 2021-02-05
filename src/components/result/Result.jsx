import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ root }) => (
  <figure>
    <figcaption>{root}</figcaption>
  </figure>
);

Result.propTypes = {
  root: PropTypes.array.isRequired,
};

export default Result;
