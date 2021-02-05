import React, { Component } from 'react';
import SearchCmp from '../../components/search/SearchCmp';
import { getSearch } from '../../services/getSearch';
import Results from '../../components/Results/Results';

export default class Search extends Component {
  state = {
    search: '',
    results: '',
    requestBody: '',
    requestURL: '',
    method: '',
    loading: false,
  };

  // componentDidMount() {
  //   this.fetchJSON();
  // }

  fetchJSON = () => {
    this.setState({ loading: true });
    getSearch(this.state.search).then((results) =>
      this.setState({ results, loading: false })
    );
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  // handleSearch = ({ target }) => {
  //   this.setState({ search: target.value }, () => {
  //     this.fetchJSON();
  //   });
  // };
  render() {
    const { method, requestURL, requestBody, results, loading } = this.state;
    console.log(method, requestURL, requestBody);
    return (
      <div>
        <SearchCmp
          requestURL={requestURL}
          requestBody={requestBody}
          onChange={this.handleChange}
        />

        {loading && <h1>Loading...</h1>}
        <Results results={results} />
      </div>
    );
  }
}
