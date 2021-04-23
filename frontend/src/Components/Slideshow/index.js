
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './style.css';
import c1 from './slides/1.jpeg';
import c2 from './slides/2.jpeg';
import c3 from './slides/3.jpeg';

const slideImages = [
  c2,
  c3,
  c1
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Ecofriendly</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Locally Sourced</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Delicious</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;