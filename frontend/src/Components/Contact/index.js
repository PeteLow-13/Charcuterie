import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className='contact-div'>
            <h2 className='text-center'>Contact Us</h2>
            <ul>
            <p className='text-center'>Phone: <a href='tel:+12065555555'>(206)-555-5555</a></p>
            <p className='text-center'>Email: <a href='mailto:ldcharcuterie@gmail.com'>ldcharcuterie@gmail.com</a></p>
            </ul>
        </div>
    )
}

export default Contact
