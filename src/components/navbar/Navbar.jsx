import React, { useState } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsX } from 'react-icons/bs';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary px-xxl-5 ${
          isNavCollapsed ? 'collapsed' : ''
        }`}
      >
        <Container className="px-xxl-5">
          <Navbar.Brand href="#home">
            <img src="./images/logo.svg" alt="company logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavToggle}
          >
            {isNavCollapsed ? (
              <BsX style={{ width: '30px', height: '30px' }} />
            ) : null}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="nav-links" href="#how-we-work">
                HOW WE WORK
              </Nav.Link>
              <Nav.Link className="nav-links" href="#blog">
                BLOG
              </Nav.Link>
              <Nav.Link className="nav-links" href="#account">
                ACCOUNT
              </Nav.Link>
              <Button variant="outline-dark">VIEW PLANS</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
