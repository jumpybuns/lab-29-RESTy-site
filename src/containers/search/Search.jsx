import React, { Component } from 'react';
import SearchCmp from '../../components/search/SearchCmp';
import { getSearch } from '../../services/getSearch';
import Results from '../../components/Results/Results';

export default class Search extends Component {
  state = {
    search: '',
    results: [],
    requestBody: '',
    requestURL: '',
    method: 'GET',
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { requestBody, requestURL, method } = this.state;
    this.setState({ requestBody, requestURL, method, loading: true });
    getSearch(requestURL, requestBody, method).then((results) =>
      this.setState({ results, loading: false })
    );
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { method, requestURL, requestBody, results, loading } = this.state;
    console.log(method, results);
    return (
      <div>
        <SearchCmp
          requestURL={requestURL}
          requestBody={requestBody}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        {loading && <h1>Loading...</h1>}
        <Results results={results} />
      </div>
    );
  }
}
