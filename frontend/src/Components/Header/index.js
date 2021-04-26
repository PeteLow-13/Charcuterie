import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const Header = () => {
    return (
        <Container className='header-div text-center py-3'>
        
            <h1>L&D</h1> 
            <h1>Charcuterie</h1>
            <h2>Seattle, WA</h2>
            <p>Making your events special since 2021</p>
        
        </Container>
    )
}
export default Header
