import React, { Component } from 'react';
import Accordian from '../Accordian';

class AboutMe extends Component {
  render() {
    return (
      <div className='aboutme-container'>
        <section className='photo-accordian'>
          <Accordian />
        </section>
      </div>
    )
  }
}

export default AboutMe;