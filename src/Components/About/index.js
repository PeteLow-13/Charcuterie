import React from 'react';
import './style.css';
import img from './IMG_0576.jpeg'

function About() {
    return (
        <div className='about-us-div'>
            <h2>About us</h2>
            <div className='fam-pic-div'>
            <img  src={img} alt='ldfamily'/>
            </div>
            <h3>Who we are:</h3>
            <p>Founded during the covid-19 outbreak when Maria realized that she could still bring the joy of a party to people stuck at home distancing</p>

            <p>We strive to make your special occasions special. We can bring a little extra deliciousness to any occasion.</p>

            <p>We also strive to be Eco friendly and source local ingredients</p>
            <button>Check out our Menu</button>
        </div>
    )
}

export default About
