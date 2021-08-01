import React from 'react';
import { Button, Row } from 'react-bootstrap';

const MenuLink = () => {
  return (
    <div className='menu-button-container'>
      <div className='menu-button'>
        <Button href='/menu' variant='primary' type='submit'>
          Check out our Menu
        </Button>
      </div>
    </div>
  );
};

export default MenuLink;
