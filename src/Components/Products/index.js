import React from 'react';
import './style.css';
import img from './IMG_5043.jpeg';

function Products() {
    return (
        <div className='our-products-div'>
            <h2>Our Products</h2>
            <div className='product-image-div'>
                <img className='product-image' src={img} alt='charcuterie'  />
            </div>            
        </div>
    )
}

export default Products;
