import React from 'react';
import { Button, Row } from 'react-bootstrap';

const MenuLink = () => {
  return (
    <div className='menu-button'>
      <Row>
        <Button href='/menu' variant='primary' type='submit'>
          Check out our Menu
        </Button>
      </Row>
    </div>
  );
};

export default MenuLink;
