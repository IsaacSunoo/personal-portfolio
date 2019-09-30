import React, { Component } from 'react';
import Skills from '../Skills';
import Accordian from '../Accordian';
import torreyPines from '../../images/torreypines.jpeg';

class AboutMe extends Component {
  render() {
    return (
      <div className='aboutme-container'>
        <section className='aboutme-section'>
          <article className='aboutme-column1'>
            <h2>about me</h2>
            <h5>My name is Isaac and I am a Software Engineer from Denver, CO.</h5>
            <p>I am a Colorado native that served 4 years in the military.  I am a Full Stack Engineer who enjoys solving complex problems and creating simple, beautiful, and intuitive designs. </p>
          </article>
          <article className='aboutme-column2'>
            <div className='octo'>
              <div className='octo1'>
                <img src={torreyPines} className='torrey-pines' alt='Me at Torry Pines' />
              </div>
            </div>
          </article>
        </section>
        <section className='photo-accordian'>
          <Accordian />
        </section>
        <section className='skills-section'>
          <Skills />
        </section>
      </div>
    )
  }
}

export default AboutMe;