import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
  return (
    <header className="header">
      <section className="personal-name">
        <Link to="/" className="link-styles">
          <h1>Isaac Sunoo</h1>
          <h4>Software Engineer</h4>
        </Link>
      </section>
      <section className="dropdown-header">
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