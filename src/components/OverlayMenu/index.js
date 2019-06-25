import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu = ( ) => {

  return (
    <div className='overlay-container'>
      <input type='checkbox' class='toggler'/>
      <div className='hamburger'><div></div></div>
      <div className='overlay-content'>
        <div>
          <div>
            <ul>
              <li><Link to='/' className='menu-links'>Home</Link></li>
              <li><Link to='/aboutme' className='menu-links'>About Me</Link></li>
              <li><Link to='/portfolio' className='menu-links'>Skills</Link></li>
              <li><Link to='/resume' className='menu-links'>Resume</Link></li>
              <li><Link to='/contact' className='menu-links'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverlayMenu;