import React from 'react'
import Gallery from './Components/Gallery';
import Social from './Components/Social';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Header from './Components/Header';

function Home() {
    return (
        <div>
            <Header />
            {/* <Gallery /> */}
            <Products />
            <Social />
            <Contact />
        </div>
    )
}

export default Home
