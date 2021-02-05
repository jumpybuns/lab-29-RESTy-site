import React from 'react';
import PropTypes from 'prop-types';

const SearchCmp = ({ search, onChange }) => (
  <div>
    <input
      type="text"
      placeholder="http://..."
      value={search}
      onChange={onChange}
    />
  </div>
);

SearchCmp.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchCmp;
