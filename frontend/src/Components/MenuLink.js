import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const MenuLink = () => {
    return (
        <div className='mx-auto'>
        <Form.Row >
            {/* <Col md={10}> */}
          <Button   href='/menu' variant="primary" type="submit">
                Check out our Menu
                </Button>
            {/* </Col>  */}
        </Form.Row>
        </div>
    )
}

export default MenuLink
