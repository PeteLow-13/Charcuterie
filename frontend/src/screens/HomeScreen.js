import React from 'react'
import Social from '../Components/Social';

import Contact from '../Components/Contact';
import Header from '../Components/Header';
import CarouselComp from '../Components/CarouselComp';
// import { Carousel } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <CarouselComp />
            <Social />
            <Contact />
        </div>
    )
}

export default HomeScreen
