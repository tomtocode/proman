import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';


import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Nav className="me-auto" >
            <Nav.Link href="/home" style={{color:"white", fontWeight:"bold"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color:"white", fontWeight: "bold"}}>About</Nav.Link>
            <Nav.Link href="/services" style={{color:"white", fontWeight: "bold"}}>Services</Nav.Link>
            <Nav.Link href="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</Nav.Link>
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