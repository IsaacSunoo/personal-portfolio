import React from 'react';
import { Link } from 'react-router-dom';
import OverlayMenu from '../OverlayMenu';

const Header = () => {
  return (
    <header className="header">
      <section className="personal-name">
        <Link to="/" className="link-styles">
          <h1>Isaac Sunoo</h1>
          <h4>Software Engineer</h4>
        </Link>
      </section>
      <OverlayMenu />
    </header>
  );
}

export default Header; 