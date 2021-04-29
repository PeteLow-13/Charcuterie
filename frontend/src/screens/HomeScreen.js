import React from 'react';
import Social from '../Components/Social';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import CarouselComp from '../Components/CarouselComp';
import MenuLink from '../Components/MenuLink';

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <CarouselComp />
            <MenuLink />
            <Social />
            <Contact />
        </div>
    )
}

export default HomeScreen
