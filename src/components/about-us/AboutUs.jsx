import React from 'react';
import './about-us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const AboutUs = () => {
  return (
    <Container className="about-us text-center text-md-start">
      <Row className="p-4 p-md-5 ">
        <Col className="p-0">
          <div className="horizontal-line "></div>
          <h1 className="display-4">We're Different</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="p-4 p-md-5">
        <Col className="py-4 p-md-2">
          <Image src="./images/icon-snappy-process.svg"></Image>
          <h1 className="display-6">Snappy Process</h1>
          <p>
            Our Application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </Col>
        <Col className="py-4 p-md-2">
          <Image src="./images/icon-snappy-process.svg"></Image>
          <h1 className="display-6">Affordable Prices</h1>
          <p>
            We don't want you worrying about high monthly const.Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </Col>
        <Col className="py-4 p-md-2">
          <Image src="./images/icon-snappy-process.svg"></Image>
          <h1 className="display-6">People First</h1>
          <p>
            Our plans aren't full of conditions clauses to prevent payouts. We
            make sure you're covered when you need it.
          </p>
        </Col>
      </Row>
      <Container className="p-4 p-lg-5 my-lg-4 mx-lg-0">
        <Row className="call-to-action p-5">
          <Col sm={7}>
            <h2 className="display-3 d-md-none">
              Find out more about how we work
            </h2>
            <h2 className="display-6 d-none d-md-block d-xl-none">
              Find out more about how we work
            </h2>
            <h2 className="display-4 d-none d-xl-block">
              Find out more about how we work
            </h2>
          </Col>
          <Col sm={5} className="text-md-end mt-4 mt-md-0">
            <Button variant="outline-light">HOW WE WORK</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
