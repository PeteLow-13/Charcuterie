import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; MD Charcuterie
          </Col>
        </Row>

        <Row>
          <Col className='text-center py-3'>
            <p>
              Built by{' '}
              <a href='https://github.com/PeteLow-13' target='blank'>
                Pete Low
              </a>
              {' & '}
              <a href='https://github.com/DanielYu0864' target='blank'>
                {'Daniel Yu'}
              </a>
              {' 2021'}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
