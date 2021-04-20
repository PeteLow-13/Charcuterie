import React from 'react';
import Header from '../Components/Header';
import Card from 'react-bootstrap/Card';
import img1  from '../assets/IMG_5045.jpeg';

function Menu() {
    return (
        <div>
            <Header />
            <h2>Menu</h2>
            <Card className="bg-dark text-white">
                <Card.Img src={ img1 } alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Charcuterie #1</Card.Title>
                    <Card.Text>
                    A decription of the item
                    </Card.Text>
                    <Card.Text>Add To Cart</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card>
            <Card.Img variant="top" src={ img1 } />
                <Card.Body>
                <Card.Text>
                    An example of a Charcuterie item
                </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Menu
