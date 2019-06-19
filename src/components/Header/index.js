import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Header = () => {
  return (
    <StickyHeader
      header={
        <header className='header'>
          <h1>Isaac Sunoo</h1>
          <h4>Software Engineer</h4>
          <section className='page-links'>
            <h4>About Me</h4>
            <h4>Portfolio</h4>
            <h4>Resume</h4>
            <h4>Skills</h4>
            <h4>Contact</h4>
          </section>
        </header>
      }
    />
  );
}

export default Header;