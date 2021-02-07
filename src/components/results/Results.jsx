import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => <pre>{JSON.stringify(results, null, 8)}</pre>;

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
