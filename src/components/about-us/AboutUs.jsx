import React from 'react';
import './about-us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const AboutUs = () => {
  return (
    <Container className="about-us p-xxl-5">
      <Row className="p-xxl-5">
        <Col className="p-xxl-3">
          <div className="horizontal-line"></div>
          <h1 className="display-4">We're Different</h1>
        </Col>
      </Row>
      <CardGroup className="p-xxl-5 gap-3">
        <Card>
          <Card.Img variant="top" src="./images/icon-snappy-process.svg" />
          <Card.Body>
            <Card.Title>Snappy Process</Card.Title>
            <Card.Text>
              Our Application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/icon-affordable-prices.svg" />
          <Card.Body>
            <Card.Title>Affordable Prices</Card.Title>
            <Card.Text>
              We don't want you worrying about high monthly const.Our prices may
              be low, but we still offer the best coverage possible.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/icon-people-first.svg" />
          <Card.Body>
            <Card.Title>People First</Card.Title>
            <Card.Text>
              Our plans aren't full of conditions clauses to prevent payouts. We
              make sure you're covered when you need it.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container className="p-xxl-5">
        <Row className="call-to-action p-5 p-md-5">
          <Col sm={7} className="text-center text-md-start">
            <h1 className="display-2 d-md-none">
              Find out more about how we work
            </h1>
            <h1 className="display-4 d-none d-md-block">
              Find out more about how we work
            </h1>
          </Col>
          <Col sm={5} className="text-center text-md-end mt-4 mt-md-0">
            <Button variant="outline-light">HOW WE WORK</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
