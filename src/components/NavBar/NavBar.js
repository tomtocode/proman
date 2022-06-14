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
            <NavLink exact to="/proman" activeClassName="main-nav-active" style={{color:"white", fontWeight:"bold"}}>Home</NavLink>
            <NavLink exact to="/services" activeClassName="main-nav-active" style={{color:"white", fontWeight: "bold", marginLeft:"20px"}}>Services</NavLink>
            <NavLink exact to="/about" activeClassName="main-nav-active" style={{color:"white", fontWeight: "bold", marginLeft:"20px"}}>About Us</NavLink>
            {/* <NavLink to="/portfolio" style={{color:"white", fontWeight: "bold"}}>Portfolio</NavLink> */}
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