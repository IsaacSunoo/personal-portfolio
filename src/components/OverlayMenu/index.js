import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu = ({ menuDisplay }) => {
  console.log('menu display: ', menuDisplay)
  let heightStyle;
  if (menuDisplay) {
    heightStyle = '100vh';
  } else if (!menuDisplay) {
    heightStyle = '0%';
  }
  console.log(heightStyle)
  return (
    <div className='overlay-container' style={{ height: heightStyle }}>
      <div className='overlay-content'>
        <Link to='/' className='menu-links'>Home</Link>
        <Link to='/aboutme' className='menu-links'>About Me</Link>
        <Link to='/portfolio' className='menu-links'>Skills</Link>
        <Link to='/resume' className='menu-links'>Resume</Link>
        <Link to='/contact' className='menu-links'>Contact</Link>
      </div>
    </div>
  )
}

export default OverlayMenu;