import React from 'react'
import Social from '../Components/Social';
import Products from '../Components/Products';
import Contact from '../Components/Contact';
import Header from '../Components/Header';


function Home() {
    return (
        <div>
            <Header />
            <Products />
            <Social />
            <Contact />
        </div>
    )
}

export default Home
