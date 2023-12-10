import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="dropdown-background"
          >
            <Nav className="ms-auto">
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
