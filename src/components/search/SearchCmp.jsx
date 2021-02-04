import React from 'react';
import PropTypes from 'prop-types';

const SearchCmp = ({ results, onChange }) => (
  <div>
    <input
      type="text"
      placeholder="http://..."
      value={results}
      onChange={onChange}
    />
  </div>
);

SearchCmp.propTypes = {
  results: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchCmp;
