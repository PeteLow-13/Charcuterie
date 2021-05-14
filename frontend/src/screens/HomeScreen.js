import React from 'react';
import Social from '../Components/Social';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import CarouselComp from '../Components/CarouselComp';
import MenuLink from '../Components/MenuLink';
import Subscribe from '../Components/Subscribe';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <CarouselComp />
      <MenuLink />
      <Social />
      <Contact />
      <Subscribe />
    </div>
  );
};

export default HomeScreen;
