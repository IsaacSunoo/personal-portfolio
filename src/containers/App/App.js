import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import MainPage from '../../components/MainPage';
import AboutMe from '../../components/AboutMe';
import OverlayMenu from '../../components/OverlayMenu';

export class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Route path='/' component={OverlayMenu} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/aboutme' component={AboutMe} />
        </Switch>
      </div>
    );
  }
}

export default App;
