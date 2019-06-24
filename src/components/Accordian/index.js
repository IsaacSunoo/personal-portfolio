import React, { Component } from 'react';
import Jordan from '../../images/mjft.png';
import SanFran from '../../images/sanfran.jpeg';
import Potato from '../../images/potato.jpg';
import FatherSon from '../../images/fatherson.jpeg';
import Keystone from '../../images/keystone.jpeg';
import SurfSunset from '../../images/surfsunset.jpg';
import SnowOllie from '../../images/snowollie.png';
import HikingOllie from '../../images/hikingOllie.jpeg';

class Accordian extends Component {
  render() {
    return (
      <div className='accordian-container'>
        <figure>
          <img src={Jordan} alt='Michael Jordan Free Throw' />
          <input type='radio' name='radio-set' />
          <figcaption><span>Take A Shot</span></figcaption>

          <figure>
            <img src={SanFran} alt='San Francisco Selfie' />
            <input type='radio' name='radio-set' />
            <figcaption><span>San Francisco</span></figcaption>

            <figure>
              <img src={Potato} alt='Potato Chip Rock' />
              <input type='radio' name='radio-set' />
              <figcaption><span>Potato Chip Rock</span></figcaption>

              <figure>
                <img src={FatherSon} alt='Isaac and his kid Ollie' />
                <input type='radio' name='radio-set' />
                <figcaption><span>Father's Day</span></figcaption>

                <figure>
                  <img src={Keystone} alt='Keystone Skiing' />
                  <input type='radio' name='radio-set' />
                  <figcaption><span>Ski Pals</span></figcaption>

                  <figure>
                    <img src={SurfSunset} alt='Post surfing sunset San Diego' />
                    <input type='radio' name='radio-set' />
                    <figcaption><span>Surf San Diego</span></figcaption>

                    <figure>
                      <img src={SnowOllie} alt='Ollie in snow' />
                      <input type='radio' name='radio-set' />
                      <figcaption><span>Ollie Love's Snow</span></figcaption>

                      <figure>
                        <img src={HikingOllie} alt='Ollie Hiking the Rockies' />
                        <input type='radio' name='radio-set' id='last-image' />
                        <figcaption><span>Hiking Ollie</span></figcaption>

                      </figure>
                    </figure>
                  </figure>
                </figure>
              </figure>
            </figure>
          </figure>
        </figure>
      </div>
    )
  }
}

export default Accordian;