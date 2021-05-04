import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import foodItems from '../foodItems';
import MenuCard from '../Components/MenuCard';
import axios from 'axios';
import { listProducts } from '../actions/productActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

const MenuScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Menu Offerings</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((menuItem) => (
            <Col key={menuItem._id} sm={12} md={6} lg={4} xl={3}>
              <MenuCard menuItem={menuItem} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default MenuScreen;
