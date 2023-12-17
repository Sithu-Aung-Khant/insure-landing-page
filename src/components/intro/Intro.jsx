import React from 'react';
import './intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Copy from './copy/Copy';

const Intro = () => {
  return (
    <>
      <Container className="intro">
        <Row className=" p-xxl-5">
          <Col sm={{ order: 2, span: 6, push: 6 }}>
            <Image
              src="images\image-intro-desktop.jpg"
              className="image-intro"
            />
          </Col>
          <Col sm={{ order: 1, span: 6, pull: 6 }}>
            {/* Heading, paragraph of Intro Page */}
            <Copy />
          </Col>
        </Row>
        <Image
          src="../../../images/bg-pattern-intro-left-desktop.svg"
          className="bg-pattern-left"
        ></Image>
        <Image
          src="../../../images/bg-pattern-intro-right-desktop.svg"
          className="bg-pattern-right"
        ></Image>
      </Container>
    </>
  );
};

export default Intro;
