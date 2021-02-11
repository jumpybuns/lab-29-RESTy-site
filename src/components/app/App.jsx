import React, { Component } from 'react';
import Search from '../../containers/search/Search';
import Header from '../Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}
