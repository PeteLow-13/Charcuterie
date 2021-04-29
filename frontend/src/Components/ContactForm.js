import React from 'react';
import { Form, Button } from 'react-bootstrap';


const ContactForm = () => {
    return (
        <>
            <Form>
                <Form.Group controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" placeholder="Your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
                <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Your Message'/>
                </Form.Group>

                <Form.Group controlId="emailList">
                <Form.Check type="checkbox" label="Subscribe to our Email updates" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Send
                </Button>
            </Form>  
        </>
    )
}

export default ContactForm;
