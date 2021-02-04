import React from 'react';
import PropTypes from 'prop-types';

const SearchCmp = ({ httpSearch, onChange }) => (
  <div>
    <input
      type="text"
      placeholder="http://..."
      value={httpSearch}
      onChange={onChange}
    />
  </div>
);

SearchCmp.propTypes = {
  httpSearch: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchCmp;
