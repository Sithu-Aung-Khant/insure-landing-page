import React from 'react';
import './about-us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
  return (
    <Container className="about-us">
      <Row>
        <Col>
          <div className="horizontal-line"></div>
          <h1>We're Different</h1>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
