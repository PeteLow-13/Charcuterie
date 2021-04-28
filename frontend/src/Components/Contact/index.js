import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const Contact = () => {
    return (
        // <div className='contact-div'>
        //     <h2 className='text-center'>Contact Us</h2>
        //     <ul>
        //     <p className='text-center'>Phone: <a href='tel:+12065555555'>(206)-555-5555</a></p>
        //     <p className='text-center'>Email: <a href='mailto:ldcharcuterie@gmail.com'>ldcharcuterie@gmail.com</a></p>
        //     </ul>

        // </div>
        <>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
    )
}

export default Contact
