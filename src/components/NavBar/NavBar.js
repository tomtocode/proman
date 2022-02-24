import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          {/* <Navbar.Brand href="#home">PROMAN</Navbar.Brand> */}
          {/* TODO: Use # navigation */}
          <Nav className="me-auto" >
            <NavLink to="/proman" style={{color:"white", fontWeight:"bold"}}>Home</NavLink>
            <NavLink to="/about" style={{color:"white", fontWeight: "bold"}}>About Us</NavLink>
            <NavLink to="/services" style={{color:"white", fontWeight: "bold"}}>Services</NavLink>
            <NavLink to="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</NavLink>
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