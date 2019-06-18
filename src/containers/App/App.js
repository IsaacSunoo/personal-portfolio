import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
      </div>
    );
  }
}

export default App;
