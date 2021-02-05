import React, { Component } from 'react';
import Home from '../../containers/home/Home';
import Header from '../../containers/header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
