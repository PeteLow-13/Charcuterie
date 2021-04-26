import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row><Col className='text-center py-3'>Copyright &copy; L&D Charcuterie</Col>
                {/* <p>Built by <a href='https://github.com/PeteLow-13' target='blank'>Pete Low 2021</a></p> */}
                </Row>
            </Container>
        </footer>
    )
}

export default Footer