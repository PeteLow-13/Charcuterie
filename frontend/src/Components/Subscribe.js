import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h2>Subscribe</h2>
          <p className='text-center'>Subscribe to our email list</p>
          <Form.Group controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Your email' />
            <Form.Text className='text-muted text-center'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
