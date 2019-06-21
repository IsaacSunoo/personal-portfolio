import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import MainPage from '../../components/MainPage';
// import Accordian from '../../components/Accordian';

export class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          {/* <Route exact path='/' component={Accordian} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
