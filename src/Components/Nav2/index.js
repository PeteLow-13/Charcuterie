import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Nav2() {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/menu">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='/contactpage'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='/aboutpage'>About</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Nav2
