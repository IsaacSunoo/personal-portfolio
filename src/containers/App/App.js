import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import MainPage from '../../components/MainPage';

export class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
