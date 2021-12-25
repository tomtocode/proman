import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';


import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // <button className="pe-nav-button">
    //   <Link to="/home">Home</Link>
    // </button>
    // <button className="pe-nav-button">
    //   <Link to="/about">About</Link>
    // </button>
    // <button className="pe-nav-button">
    //   <Link to="/portfolio">Portfolio</Link>
    // </button>
    // <button className="pe-nav-button">
    //   <Link to="/contact-us">Contact Us</Link>
    // </button>
  );
};

export default NavBar;