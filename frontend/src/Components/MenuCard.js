import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MenuCard = ({ menuItem }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/menuItem/${menuItem._id}`}>
                <Card.Img src={menuItem.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/menuItem/${menuItem._id}`}>
                    <Card.Title as='div'>
                        <strong>{menuItem.name}</strong>
                    </Card.Title>
                </Link>
                {/* <Card.Text as='div'>
                    <Rating value={menuItem.rating} text={`${menuItem.numReviews} reviews`} />
                </Card.Text> */}
                <Card.Text as='h3'>${menuItem.price}</Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard
