import React, { Component } from 'react';
// import DropdownMenu from '../DropdownMenu';

class MainPage extends Component {
  render() {
    return (
      <div className="main-container">
        {/* <DropdownMenu /> */}
        <div className="main-page main-inner">
          <h1>
            <span className="wrap-text">Not Your</span>
            <span className="wrap-text">Average </span>
            <span className="wrap-text">Software </span>
            <span className="wrap-text">Engineer </span>
          </h1>
          {/* <h1>Not Your Average Software Engineer</h1> */}
        </div>
        {/* <div className='main-page-text'>Not Your Average Software Engineer</div> */}
      </div>
    );
  }
}

export default MainPage;