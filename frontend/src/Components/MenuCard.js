import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const MenuCard = ({ menuItem }) => {
  /*
    useHistory(): to redirect to cart and add the item id to URL
    more: https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
  */
  const history = useHistory();
  const addToCartHandler = () => {
    history.push(`/cart/${menuItem._id}`); // redirect
  };
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/menuItem/${menuItem._id}`}>
        <Card.Img src={menuItem.image} variant='top' className='rounded' />
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
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
