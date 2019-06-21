import React, { Component } from 'react';
import Accordian from '../Accordian';
import codeimage from '../../images/codeimage.png';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="main-page">
          <img className="entry-image" src={codeimage} alt="main page background" />
        </div>
        {/* <div className='main-page-text'>Not Your Average Software Engineer</div> */}
        <Accordian />
      </div>
    );
  }
}

export default MainPage;