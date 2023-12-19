import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <Container className="footer text-center text-md-start">
      <Row className="p-4 p-md-5">
        <Col xs={12} md={6} className="py-4 p-md-0">
          <img src="./images/logo.svg" alt="company logo" />
        </Col>
        <Col xs={12} md={6} className="text-md-end">
          <img src="images/icon-facebook.svg" alt="Facebook" />
          <img src="images/icon-twitter.svg" alt="Twitter" />
          <img src="images/icon-pinterest.svg" alt="Pinterest" />
          <img src="images/icon-instagram.svg" alt="Instagram" />
        </Col>
      </Row>
      <div className="horizontal-line"></div>
      <Row className="p-4 p-md-5">
        <Col xs={12} md={3}>
          <h5>OUR COMPANY</h5>
          <h6>
            <a href="">HOW WE WORK</a>
          </h6>
          <h6 href="">
            <a href="">WHY INSURE</a>
          </h6>
          <h6>
            <a href="">VIEW PLANS</a>
          </h6>
          <h6>
            <a href="">REVIEWS</a>
          </h6>
        </Col>
        <Col xs={12} md={3}>
          <h5>HELP ME</h5>
          <h6>
            <a href="">FAQ</a>
          </h6>
          <h6>
            <a href="">TERMS OF USE</a>
          </h6>
          <h6>
            <a href="">PRIVACY POLICY</a>
          </h6>
          <h6>
            <a href="">COOKIES</a>
          </h6>
        </Col>
        <Col xs={12} md={3}>
          <h5>CONTACT</h5>
          <h6>
            <a href="">SALES</a>
          </h6>
          <h6>
            <a href="">SUPPORT</a>
          </h6>
          <h6>
            <a href="">LIVE CHAT</a>
          </h6>
        </Col>
        <Col xs={12} md={3}>
          <h5>OTHERS</h5>
          <h6>
            <a href="">CAREERS</a>
          </h6>
          <h6>
            <a href="">PRESS</a>
          </h6>

          <h6>
            <a href="">LICENSES</a>
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
