import React, { Component } from 'react';
import SearchCmp from '../../components/search/SearchCmp';
import { getSearch } from '../../services/getSearch';
import Results from '../../components/Results/Results';

export default class Search extends Component {
  state = {
    search: '',
    results: '',
    loading: false,
  };

  componentDidMount() {
    this.fetchJSON();
  }

  fetchJSON = () => {
    this.setState({ loading: true });
    getSearch(this.state.search).then((results) =>
      this.setState({ results, loading: false })
    );
  };

  handleSearch = ({ target }) => {
    this.setState({ [target.search]: target.value });
  };
  render() {
    const { search, results, loading } = this.state;

    return (
      <div>
        <SearchCmp search={search} onChange={this.handleSearch} />
        <button>Go</button>
        {loading && <h1>Loading...</h1>}
        <Results result={results} />
      </div>
    );
  }
}
