import React from 'react';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
  return (
    <header className='header'>
      <section className='personal-name'>
        <h1>Isaac Sunoo</h1>
        <h4>Software Engineer</h4>
      </section>
      <section className='dropdown-header'>
        <DropdownMenu />
        {/* <h4>About Me</h4>
        <h4>Portfolio</h4>
        <h4>Resume</h4>
        <h4>Skills</h4>
        <h4>Contact</h4> */}
      </section>
    </header>
  );
}

export default Header;