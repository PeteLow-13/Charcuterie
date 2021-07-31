import React from 'react';
import { Carousel } from 'react-bootstrap';
import charc1 from '../images/charc7.jpeg';
import charc2 from '../images/charc8.jpeg';
import charc3 from '../images/charc9.jpeg';

const CarouselComp = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 fluid rounded contain'
            src={charc1}
            alt='First slide'
          />
          <Carousel.Caption>
            {/* <h3>Charcuterie #1</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 fluid rounded contain'
            src={charc2}
            alt='Second slide'
          />

          <Carousel.Caption>
            {/* <h3>Charcuterie #2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 fluid rounded contain'
            src={charc3}
            alt='Third slide'
          />

          <Carousel.Caption>
            {/* <h3>Charcuterie #3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComp;
