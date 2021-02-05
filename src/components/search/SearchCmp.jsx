import React from 'react';
import PropTypes from 'prop-types';

const SearchCmp = ({
  requestURL,
  requestBody,
  onChange,
  onSubmit,
  results,
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="GET">
        <input
          id="GET"
          type="radio"
          name="method"
          value="GET"
          onChange={onChange}
        />
      </label>
      <label htmlFor="POST">
        <input
          id="POST"
          type="radio"
          name="method"
          value="POST"
          onChange={onChange}
        />
      </label>
      <label htmlFor="PUT">
        <input
          id="PUT"
          type="radio"
          name="method"
          value="PUT"
          onChange={onChange}
        />
      </label>
      <label htmlFor="DELETE">
        <input
          id="DELETE"
          type="radio"
          name="method"
          value="DELETE"
          onChange={onChange}
        />
      </label>

      <input
        name="requestURL"
        type="text"
        placeholder="http://..."
        value={requestURL}
        onChange={onChange}
      />
      <button>GO</button>

      <textarea
        placeholder="post/put text"
        name="requestBody"
        onChange={onChange}
        value={results}
      />
    </form>
  </div>
);

SearchCmp.propTypes = {
  requestBody: PropTypes.string.isRequired,
  requestURL: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
};

export default SearchCmp;
