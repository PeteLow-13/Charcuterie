import React from 'react';
import foodItems from '../foodItems';
import MenuCard from '../Components/MenuCard';
import { Row, Col } from 'react-bootstrap';

const MenuScreen = () => {
    return (
        <>
          <h1>Menu Offerings</h1> 
            <Row>
                {foodItems.map(menuItem => (
                    <Col key={menuItem._id} sm={12} md={6} lg={4} xl={3}>
                        <MenuCard menuItem={menuItem} />
                    </Col>   
                ))} 
            </Row>
        </>
    )
}

export default MenuScreen
