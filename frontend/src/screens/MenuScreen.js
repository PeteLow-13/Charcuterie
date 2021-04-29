import React, { useState, useEffect } from 'react';
import foodItems from '../foodItems';
import MenuCard from '../Components/MenuCard';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const MenuScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
      // console.log(data)
    };

    fetchProducts();

    // console.log(products)
  }, []);

  return (
    <>
      <h1>Menu Offerings</h1>
      <Row>
        {foodItems.map((menuItem) => (
          <Col key={menuItem._id} sm={12} md={6} lg={4} xl={3}>
            <MenuCard menuItem={menuItem} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MenuScreen;
