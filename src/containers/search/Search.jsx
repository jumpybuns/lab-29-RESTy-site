import React, { Component } from 'react';
import SearchCmp from '../../components/search/SearchCmp';
import { getSearch } from '../../services/getSearch';

export default class Search extends Component {
  state = {
    search: 'penny',
    httpResults: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchJSON();
  }

  fetchJSON = () => {
    this.setState({ loading: true });
    getSearch(this.state.search).then((httpResults) =>
      this.setState({ httpResults, loading: false })
    );
  };

  handleSearch = ({ target }) => {
    this.setState({ [target.search]: target.value });
  };
  render() {
    const { search, httpResults, loading } = this.state;

    return (
      <div>
        <SearchCmp search={search} onChange={this.handleSearch} />
        {loading && <h1>Loading...</h1>}
        <JSONList httpResults={httpResults} />
      </div>
    );
  }
}
