import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import MainPage from '../../components/MainPage';
import AboutMe from '../../components/AboutMe';
import Portfolio from '../../components/Portfolio';


export class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;
