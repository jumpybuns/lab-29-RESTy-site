import React from 'react';
import Result from '../result/Result';
import PropTypes from 'prop-types';

const JSONResults = ({ results }) => {
  if (results.length < 1) return <h1>Make a search...</h1>;

  const resultElements = results.map((result) => (
    <li key={result.results}>
      <Result {...result} />
    </li>
  ));

  return <ul date-testid="results">{resultElements}</ul>;
};

JSONResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default JSONResults;
