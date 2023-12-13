import React from 'react';
import './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Copy from './copy/Copy';

const Main = () => {
  return (
    <>
      <Container className="copy-container">
        <Row>
          <Col sm={{ order: 2, span: 6, push: 6 }}>
            <Image src="public\images\image-intro-desktop.jpg" />
          </Col>
          <Col sm={{ order: 1, span: 6, pull: 6 }}>
            <Copy />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
