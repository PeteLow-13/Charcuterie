import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(product);
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  console.log(product);
  return (
    <>
      <Link className='btn btn-light my-3' to='/menu'>
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <h3>{product.name}</h3>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
