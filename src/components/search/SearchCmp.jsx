import React from 'react';
import PropTypes from 'prop-types';

const SearchCmp = ({ httpResults, onChange }) => (
  <div>
    <input
      type="text"
      placeholder="http://..."
      value={httpResults}
      onChange={onChange}
    />
  </div>
);

SearchCmp.propTypes = {
  httpResults: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchCmp;
