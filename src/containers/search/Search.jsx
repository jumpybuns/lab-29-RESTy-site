import React, { Component } from 'react';
import SearchCmp from '../../components/search/SearchCmp';

export default class Search extends Component {
  state = {
    httpSearch: [],
    loading: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.search]: target.value });
  };
  render() {
    const { httpSearch } = this.state;

    return (
      <div>
        <SearchCmp httpSearch={httpSearch} onChange={this.handleChange} />
      </div>
    );
  }
}
