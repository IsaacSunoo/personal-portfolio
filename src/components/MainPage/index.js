import React, { Component } from 'react';
import codeimage from '../../images/codeimage.png';
import OverlayMenu from '../OverlayMenu';

class MainPage extends Component {
  render() {
    return (
      <div>
        <OverlayMenu />
        <div className="main-page">
          <img className="entry-image" src={codeimage} alt="main page background" />
        </div>
        {/* <div className='main-page-text'>Not Your Average Software Engineer</div> */}
      </div>
    );
  }
}

export default MainPage;